<?php
/**
 * Contact form proxy.
 * Frontend POSTs here; this script forwards to Formspree using a server-side
 * secret loaded from .env, so the Formspree ID is never exposed to the browser.
 *
 * Required .env (placed OUTSIDE the public webroot, e.g. one level up):
 *   FORMSPREE_ID=xxxxxxxx
 *
 * Optional:
 *   ALLOWED_ORIGIN=https://your-domain.com   (defaults to same-origin only)
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function load_env(string $path): array {
    if (!is_readable($path)) return [];
    $out = [];
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') continue;
        [$k, $v] = array_pad(explode('=', $line, 2), 2, '');
        $v = trim($v, " \t\"'");
        $out[trim($k)] = $v;
    }
    return $out;
}

$envPaths = [
    __DIR__ . '/../../.env',
    __DIR__ . '/../.env',
    __DIR__ . '/.env',
];
$env = [];
foreach ($envPaths as $p) {
    if (is_readable($p)) { $env = load_env($p); break; }
}

$formspreeId = $env['FORMSPREE_ID']
    ?? getenv('FORMSPREE_ID')
    ?: ($_SERVER['FORMSPREE_ID'] ?? '');

if ($formspreeId === '') {
    http_response_code(500);
    error_log('contact.php: FORMSPREE_ID is not configured');
    echo json_encode(['ok' => false, 'error' => 'Server misconfigured']);
    exit;
}

$allowedOrigin = $env['ALLOWED_ORIGIN'] ?? getenv('ALLOWED_ORIGIN') ?: '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($allowedOrigin !== '' && $origin !== '' && $origin !== $allowedOrigin) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Forbidden origin']);
    exit;
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') !== false) {
    $raw = file_get_contents('php://input') ?: '';
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
        exit;
    }
} else {
    $data = $_POST;
}

if (!empty($data['_gotcha'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$endpoint = 'https://formspree.io/f/' . rawurlencode($formspreeId);

$ch = curl_init($endpoint);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($data, JSON_UNESCAPED_UNICODE),
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_FOLLOWLOCATION => false,
]);

$body   = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err    = curl_error($ch);
curl_close($ch);

if ($body === false) {
    http_response_code(502);
    error_log('contact.php: curl error: ' . $err);
    echo json_encode(['ok' => false, 'error' => 'Upstream request failed']);
    exit;
}

http_response_code($status ?: 502);
echo $body;
