import type { Lang } from './ui';

export interface Testimonial {
  name: string;
  title: string;
  relationship: string;
  text: string;
}

export const testimonialsData: Record<Lang, Testimonial[]> = {
  en: [
    {
      name: 'Bruno Pougault',
      title: 'Senior Global Marketing Manager Hemostasis, HORIBA | MBA',
      relationship: 'Senior colleague at Horiba',
      text: "Sebastian is a scientist with extensive experience in the field of hematology and hemostasis. He knows the IVD market inside out. It was a great pleasure to work with Sebastian, who has great human qualities and a perfect vision and analysis of the market in both the short and long term.",
    },
    {
      name: 'France Koperska',
      title: 'Chief Financial Officer, Yareal Polska',
      relationship: 'Senior colleague at Horiba',
      text: "Sebastian has a very high knowledge in his field of experience and managed to build strong relationships with the sales team and clients. It was a pleasure to work with Sebastian thanks to his open mind for new projects.",
    },
    {
      name: 'Agnieszka Łuszczewska',
      title: 'CFO',
      relationship: 'Direct supervisor at Horiba',
      text: "Sebastian is an ambitious and professional specialist in his field. We worked together for many years at Horiba. As a salesperson, he once set himself the goal of managing a product group — and he achieved it. Thanks to his exceptional personality he builds great relationships and achieves his professional as well as personal goals. I highly recommend working with Sebastian.",
    },
    {
      name: 'Aleksandra Lubaczewska',
      title: 'Client Advisor, Companion Animals Division',
      relationship: 'Cross-team colleague at Horiba Medical',
      text: "I worked with Sebastian for several years at Horiba Medical. He is a reliable, substantive professional always focused on solving problems. He maintained excellent relationships with both clients and the internal team, always provided expert assistance, and consistently drove toward the set goal. Through his own diligence and hard work he advanced to a senior position in the company.",
    },
    {
      name: 'Tomasz Kniewski',
      title: 'Product Specialist, Bracco Imaging Poland',
      relationship: 'Peer at Horiba Medical',
      text: "At Horiba Medical, Sebastian and I held equivalent positions — yet he was an invaluable source of expert knowledge for me and the entire sales team. He had outstanding client relationships, acting more as a trusted advisor than a salesperson. During internal training he could translate complex theoretical problems into the practical needs of our clients with remarkable clarity. His rise to Product Manager is the natural result of his knowledge and professionalism. I also remember him as a great colleague: sense of humour, openness, kindness, intelligence, and high personal culture — in both professional and personal relationships.",
    },
    {
      name: 'Marcin Krzysztowski',
      title: 'Field Service Engineer, GE Healthcare',
      relationship: 'Cross-team colleague at Horiba',
      text: "During our several years of collaboration at Horiba, Sebastian proved to be both a wonderful person and an outstanding professional. Always open, he willingly offered advice and assistance in solving application problems. Thanks to his interpersonal skills and excellent client relationships, our company gained many new contracts and was able to grow significantly in Clinical Chemistry.",
    },
  ],
  pl: [
    {
      name: 'Bruno Pougault',
      title: 'Senior Global Marketing Manager Hemostasis, HORIBA | MBA',
      relationship: 'Współpracownik w Horiba',
      text: "Sebastian is a scientist with extensive experience in the field of hematology and hemostasis. He knows the IVD market inside out. It was a great pleasure to work with Sebastian, who has great human qualities and a perfect vision and analysis of the market in both the short and long term.",
    },
    {
      name: 'France Koperska',
      title: 'Chief Financial Officer, Yareal Polska',
      relationship: 'Przełożona w Horiba',
      text: "Sebastian has a very high knowledge in his field of experience and managed to build strong relationships with the sales team and clients. It was a pleasure to work with Sebastian thanks to his open mind for new projects.",
    },
    {
      name: 'Agnieszka Łuszczewska',
      title: 'CFO',
      relationship: 'Bezpośrednia przełożona w Horiba',
      text: "Sebastian jest ambitnym i fachowym specjalistą w swojej dziedzinie. Pracowaliśmy razem przez wiele lat w Horibie. Będąc handlowcem, założył sobie kiedyś, że będzie zarządzał grupą produktową i tak się stało. Dzięki wyjątkowej osobowości buduje świetne relacje i realizuje swoje cele zawodowe jak i prywatne. Polecam gorąco współpracę z Sebastianem.",
    },
    {
      name: 'Aleksandra Lubaczewska',
      title: 'Doradca ds. Klientów, Dział Zwierząt Towarzyszących',
      relationship: 'Współpracowniczka w Horiba Medical',
      text: "Współpracowałam z Sebastianem przez kilka lat w Horiba Medical. W mojej ocenie jest pracownikiem rzetelnym, rzeczowym i zawsze zorientowanym na rozwiązanie problemu. Utrzymywał dobre relacje z klientem i zespołem firmy. Zawsze służył fachową pomocą i dążył do osiągnięcia wyznaczonego celu. Dzięki własnej solidności i pracowitości osiągnął wysoki poziom w hierarchii firmy.",
    },
    {
      name: 'Tomasz Kniewski',
      title: 'Product Specialist, Bracco Imaging Poland',
      relationship: 'Współpracownik w Horiba Medical',
      text: "W okresie mojej pracy w Horiba Medical wykonywaliśmy z Sebastianem obowiązki na równorzędnych stanowiskach. Był jednak dla mnie i dla pozostałych członków zespołu sprzedażowego nieocenionym źródłem fachowej wiedzy z zakresu diagnostyki laboratoryjnej. Miał znakomite relacje z klientami, dla których był bardziej fachowym doradcą niż sprzedawcą. W czasie wewnętrznych szkoleń potrafił klarownie wpasować zawiłe problemy teoretyczne w potrzeby naszych odbiorców. Obecna pozycja Product Managera jest potwierdzeniem i naturalnym wynikiem wiedzy i profesjonalizmu Sebastiana. Poczucie humoru, otwartość na ludzi, życzliwość, inteligencja i wysoka kultura osobista to cechy Sebastiana zarówno w relacjach zawodowych, jak i prywatnych.",
    },
    {
      name: 'Marcin Krzysztowski',
      title: 'Field Service Engineer, GE Healthcare',
      relationship: 'Współpracownik w Horiba',
      text: "Podczas naszej kilkuletniej współpracy w firmie Horiba, Sebastian dał się poznać jako wspaniały człowiek i znakomity fachowiec. Zawsze otwarty, chętnie służył radą i pomocą przy rozwiązywaniu problemów aplikacyjnych. Dzięki jego umiejętnościom interpersonalnym i doskonałym relacjom z klientami, nasza firma zyskała wiele nowych kontraktów i mogła rozwijać się w zakresie Chemii Klinicznej.",
    },
  ],
};

export const skillsData: Record<Lang, { title: string; subtitle: string }[]> = {
  en: [
    { title: 'Sales Team Leadership & Development', subtitle: "I built and restructured sales departments — from recruitment through day-to-day team management to people development." },
    { title: 'Business Development & Growth Strategy', subtitle: "I opened new market segments, built pipelines, and found revenue where others didn't see it." },
    { title: 'Key Accounts & KOL Management', subtitle: 'I managed key accounts and relationships with opinion leaders in clinical and veterinary laboratories.' },
    { title: 'P&L & Budget Management', subtitle: 'Full accountability for financial results — from budget planning to daily decisions impacting profitability.' },
    { title: 'Customer Segmentation & Pricing', subtitle: "I segmented customers and built pricing policies that made business sense, not just commercial sense." },
    { title: 'Distribution Network Management', subtitle: 'I managed a distribution network across 7 NEEU countries — from partner selection to target execution.' },
    { title: 'Product & Application Knowledge', subtitle: 'Clinical chemistry, haematology, haemostasis, immunochemistry — I know these areas from the laboratory side and the product side.' },
    { title: 'Market Analysis & Competitive Strategy', subtitle: 'I analysed markets and competition to make decisions based on data, not gut feeling.' },
  ],
  pl: [
    { title: 'Przywództwo i rozwój zespołu sprzedaży', subtitle: 'Budowałem i restrukturyzowałem działy sprzedaży — od rekrutacji po codzienną pracę z zespołem i rozwój ludzi.' },
    { title: 'Rozwój biznesu i strategia wzrostu', subtitle: 'Otwierałem nowe segmenty rynku, budowałem pipeline i szukałem przychodów tam gdzie inni ich nie widzieli.' },
    { title: 'Kluczowi klienci i zarządzanie KOL', subtitle: 'Zarządzałem kluczowymi klientami i relacjami z liderami opinii w laboratoriach klinicznych i weterynaryjnych.' },
    { title: 'Zarządzanie P&L i budżetem', subtitle: 'Pełna odpowiedzialność za wynik finansowy — od planowania budżetu po codzienne decyzje wpływające na rentowność.' },
    { title: 'Segmentacja klientów i polityka cenowa', subtitle: 'Segmentowałem klientów i budowałem politykę cenową która miała sens biznesowy, nie tylko handlowy.' },
    { title: 'Zarządzanie siecią dystrybucji', subtitle: 'Zarządzałem siecią dystrybucji w 7 krajach regionu NEEU — od wyboru partnerów po egzekucję celów.' },
    { title: 'Wiedza produktowa i aplikacyjna', subtitle: 'Chemia kliniczna, hematologia, hemostaza, immunochemia — znam te obszary od strony laboratorium i od strony produktu.' },
    { title: 'Analiza rynku i strategia konkurencyjna', subtitle: 'Analizowałem rynek i konkurencję żeby podejmować decyzje oparte na danych, nie na przeczuciach.' },
  ],
};

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  current: boolean;
  highlights: string[];
  tags: string[];
}

export const experienceData: Record<Lang, Experience[]> = {
  en: [
    {
      period: '2024 – Present',
      role: 'Chief Operating Officer',
      company: 'Laboklin Polska Sp. z o.o. (Laboklin Group, Germany)',
      location: 'Warsaw, Poland',
      current: true,
      highlights: [
        'Full P&L accountability for a veterinary diagnostics laboratory — managing an 18-person multidisciplinary team (lab, sales, customer service)',
        'Acquisition and restructuring of the sales department: customer segmentation, discount policy renegotiation, building a structured commercial pipeline',
        'Designed and launched a partner programme for smaller outsourcing laboratories — new revenue streams',
        'Annual budget management, financial forecasting, cost analysis, and profitability optimisation',
        'Developed a digital transformation roadmap (mobile app, courier integration, web portal) with ROI analysis',
      ],
      tags: ['COO', 'P&L', 'Sales restructuring', 'Digital transformation', 'Laboklin Group'],
    },
    {
      period: 'Feb 2024 – May 2024',
      role: 'Clinical Laboratory Study Manager',
      company: 'GSK, Warsaw',
      location: 'Warsaw, Poland',
      current: false,
      highlights: [
        'Management of clinical and operational study processes in hospital environments',
        'Oversight of sample flow, team workflows, and documentation compliance in multi-site clinical trials',
      ],
      tags: ['GSK', 'Clinical studies', 'Laboratory operations'],
    },
    {
      period: '2022 – Jan 2024',
      role: 'Clinical Application Specialist IVD (NEEU Region)',
      company: 'Mindray Medical Poland Sp. z o.o.',
      location: 'NEEU Region — 7 countries',
      current: false,
      highlights: [
        'Implementation of haematology analysers across 7 NEEU countries, including a strategic installation at Hospital Clinic de Barcelona',
        'Certified Mindray Haematology Trainer — clinical and technical training for laboratories and distributors',
        'Customer service procedure audits and standardisation; KOL relationship management and local distribution networks',
        'Market data collection across 7 countries — contribution to regional commercial strategy and HQ product roadmap',
      ],
      tags: ['Mindray', 'IVD Haematology', 'Certified Trainer', 'NEEU', '7 countries'],
    },
    {
      period: 'Mar 2022 – Sep 2022',
      role: 'Product Manager',
      company: 'P.P.H.U. BOR-POL',
      location: 'Gliwice, Poland',
      current: false,
      highlights: [
        'Management of the IVD product portfolio for a Polish diagnostics distributor — positioning, promotional activities, and sales support',
        'Developing go-to-market plans and customer materials in collaboration with commercial and technical teams',
      ],
      tags: ['IVD', 'Product Manager', 'Distribution', 'BOR-POL'],
    },
    {
      period: '2017 – Feb 2022',
      role: 'Product Manager – Clinical Chemistry & Haemostasis',
      company: 'Horiba ABX Sp. z o.o.',
      location: 'Poland and EMEA',
      current: false,
      highlights: [
        'Consistently exceeded annual sales targets at 110%+ — 2× winner of the TOP Performance Club in the European Horiba network',
        "Signed an exclusive HbA1c test contract with Diagnostyka — Poland's largest laboratory network",
        'Go-to-market strategy for new products: market analysis, positioning, pricing, campaigns, and sales team enablement',
        'KOL relationship development in clinical chemistry and haemostasis; representing Horiba at scientific congresses',
      ],
      tags: ['Horiba ABX', 'Clinical chemistry', 'Haemostasis', '2×TOP Performance Club', '110%+ target'],
    },
    {
      period: '2014 – 2016',
      role: 'Product Specialist – Clinical Chemistry',
      company: 'Horiba ABX Sp. z o.o.',
      location: 'Poland',
      current: false,
      highlights: [
        'Technical and application support for the clinical chemistry portfolio for customers and sales teams across Poland',
        'Creating training materials and conducting product demonstrations for diagnosticians and procurement decision-makers',
      ],
      tags: ['Horiba ABX', 'Clinical chemistry', 'Application support'],
    },
    {
      period: '2010 – 2013',
      role: 'Sales Representative',
      company: 'Horiba ABX Sp. z o.o.',
      location: 'Poland',
      current: false,
      highlights: [
        'Building and managing a clinical customer portfolio in an assigned territory — consistently meeting and exceeding commercial targets',
        'Direct sales and relationship management with clinical laboratories',
      ],
      tags: ['Horiba ABX', 'Sales', 'Key Accounts'],
    },
    {
      period: '2006 – 2010',
      role: 'Laboratory Manager',
      company: 'Diagnostyka Sp. z o.o.',
      location: 'Opole region — Gynaecology-Obstetrics Hospital, Neuropsychiatric Hospital',
      current: false,
      highlights: [
        'Operational management of diagnostic laboratories in hospitals in the Opole region',
        'Quality systems, process optimisation, personnel supervision, and analytical equipment management',
        'Deep understanding of laboratory procurement decisions — a valuable perspective for subsequent supplier-side roles',
      ],
      tags: ['Lab Manager', 'Diagnostyka', 'QA/QC', 'Operations'],
    },
  ],
  pl: [
    {
      period: '2024 – Teraz',
      role: 'Dyrektor Operacyjny',
      company: 'Laboklin Polska Sp. z o.o. (Laboklin Group, Germany)',
      location: 'Warszawa, Polska',
      current: true,
      highlights: [
        'Pełna odpowiedzialność P&L za laboratorium diagnostyki weterynaryjnej — zarządzanie 18-osobowym multidyscyplinarnym zespołem (lab, sprzedaż, obsługa klienta)',
        "Przejęcie i restrukturyzacja działu sprzedaży: segmentacja klientów, renegocjacja polityki rabatowej, budowa ustrukturyzowanego pipeline'u komercyjnego",
        'Zaprojektowanie i uruchomienie programu partnerskiego dla mniejszych laboratoriów outsourcingowych — nowe strumienie przychodów',
        'Zarządzanie rocznym budżetem, prognozowaniem finansowym, analizą kosztów i optymalizacją rentowności',
        'Opracowanie roadmapy transformacji cyfrowej (aplikacja mobilna, integracja kurierska, portal webowy) z analizą ROI',
      ],
      tags: ['COO', 'P&L', 'Restrukturyzacja sprzedaży', 'Transformacja cyfrowa', 'Laboklin Group'],
    },
    {
      period: 'Luty 2024 – Maj 2024',
      role: 'Kierownik Badań Laboratoryjnych',
      company: 'GSK, Warsaw',
      location: 'Warszawa, Polska',
      current: false,
      highlights: [
        'Zarządzanie klinicznymi i operacyjnymi procesami badań w środowiskach szpitalnych',
        'Nadzór nad przepływem próbek, obiegiem pracy zespołów i zgodnością dokumentacji w wieloośrodkowych badaniach klinicznych',
      ],
      tags: ['GSK', 'Badania kliniczne', 'Operacje laboratoryjne'],
    },
    {
      period: '2022 – Styczeń 2024',
      role: 'Specjalista ds. Aplikacji Klinicznych IVD (Region NEEU)',
      company: 'Mindray Medical Poland Sp. z o.o.',
      location: 'Region NEEU — 7 krajów',
      current: false,
      highlights: [
        'Wdrożenie analizatorów hematologicznych w 7 krajach regionu NEEU, w tym strategiczna instalacja w Hospital Clinic de Barcelona',
        'Certyfikowany Trener Hematologii Mindray — szkolenia kliniczne i techniczne dla laboratoriów i dystrybutorów',
        'Audyty i standaryzacja procedur obsługi klienta; zarządzanie relacjami z KOL i lokalnymi sieciami dystrybucji',
        'Zbieranie danych rynkowych w 7 krajach — wkład do regionalnej strategii komercjalnej i roadmapy produktowej HQ',
      ],
      tags: ['Mindray', 'Hematologia IVD', 'Certyfikowany Trener', 'NEEU', '7 krajów'],
    },
    {
      period: 'Marzec 2022 – Wrzesień 2022',
      role: 'Menedżer Produktu',
      company: 'P.P.H.U. BOR-POL',
      location: 'Gliwice, Polska',
      current: false,
      highlights: [
        'Zarządzanie portfelem produktów IVD polskiego dystrybutora diagnostyki — pozycjonowanie, działania promocyjne i wsparcie sprzedaży',
        'Opracowywanie planów go-to-market i materiałów dla klientów we współpracy z zespołami komercjalnymi i technicznymi',
      ],
      tags: ['IVD', 'Product Manager', 'Dystrybucja', 'BOR-POL'],
    },
    {
      period: '2017 – Luty 2022',
      role: 'Menedżer Produktu – Chemia Kliniczna i Hemostaza',
      company: 'Horiba ABX Sp. z o.o.',
      location: 'Polska i EMEA',
      current: false,
      highlights: [
        'Konsekwentne przekraczanie rocznych celów sprzedażowych na poziomie 110%+ — 2× laureat TOP Performance Club w sieci europejskiej Horiba',
        'Podpisanie ekskluzywnego kontraktu na testy HbA1c z Diagnostyką — największą siecią laboratoriów w Polsce',
        'Strategia go-to-market dla nowych produktów: analiza rynku, pozycjonowanie, cennik, kampanie i enablement zespołu sprzedaży',
        'Rozwój relacji z KOL w chemii klinicznej i hemostazie; reprezentowanie Horiba na kongresach naukowych',
      ],
      tags: ['Horiba ABX', 'Chemia kliniczna', 'Hemostaza', '2×TOP Performance Club', '110%+ target'],
    },
    {
      period: '2014 – 2016',
      role: 'Specjalista Produktowy – Chemia Kliniczna',
      company: 'Horiba ABX Sp. z o.o.',
      location: 'Polska',
      current: false,
      highlights: [
        'Wsparcie techniczne i aplikacyjne portfolio chemii klinicznej dla klientów i zespołów sprzedaży w całej Polsce',
        'Tworzenie materiałów szkoleniowych i prowadzenie demonstracji produktów dla diagnostów i osób decyzyjnych ds. zakupów',
      ],
      tags: ['Horiba ABX', 'Chemia kliniczna', 'Wsparcie aplikacyjne'],
    },
    {
      period: '2010 – 2013',
      role: 'Przedstawiciel Handlowy',
      company: 'Horiba ABX Sp. z o.o.',
      location: 'Polska',
      current: false,
      highlights: [
        'Budowa i zarządzanie portfelem klientów klinicznych na przydzielonym terytorium — konsekwentna realizacja i przekraczanie celów komercjalnych',
        'Sprzedaż bezpośrednia i zarządzanie relacjami z laboratoriami klinicznymi',
      ],
      tags: ['Horiba ABX', 'Sprzedaż', 'Key Accounts'],
    },
    {
      period: '2006 – 2010',
      role: 'Kierownik Laboratorium',
      company: 'Diagnostyka Sp. z o.o.',
      location: 'Woj. Opolskie — Szpital Ginekologiczno-Położniczy, Szpital Neuropsychiatryczny',
      current: false,
      highlights: [
        'Zarządzanie operacyjne laboratoriami diagnostycznymi w szpitalach w regionie opolskim',
        'Systemy jakości, optymalizacja procesów, nadzór kadrowy i zarządzanie sprzętem analitycznym',
        'Głębokie zrozumienie decyzji zakupowych laboratorium — cenna perspektywa dla późniejszej roli po stronie dostawcy',
      ],
      tags: ['Lab Manager', 'Diagnostyka', 'QA/QC', 'Operacje'],
    },
  ],
};

export const earlierCareer: Record<Lang, { period: string; role: string; company: string }[]> = {
  en: [
    { period: '2005–2006', role: 'Assistant', company: 'LOMA Laboratorium Medyczne' },
    { period: '2004–2005', role: 'Medical Representative', company: 'Servier Sp. z o.o.' },
    { period: '2000–2004', role: 'Laboratory Manager', company: 'Wojewódzki Szpital Chorób Płuc i Gruźlicy' },
  ],
  pl: [
    { period: '2005–2006', role: 'Asystent', company: 'LOMA Laboratorium Medyczne' },
    { period: '2004–2005', role: 'Przedstawiciel Medyczny', company: 'Servier Sp. z o.o.' },
    { period: '2000–2004', role: 'Kierownik Laboratorium', company: 'Wojewódzki Szpital Chorób Płuc i Gruźlicy' },
  ],
};

const iconMba = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>`;
const iconLab = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>`;
const iconBook = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`;

export interface Degree {
  degree: string;
  institution: string;
  years: string;
  icon: string;
  highlight: 'primary' | 'clinical' | false;
}

export interface Cert {
  name: string;
  issuer: string;
  year: string;
  description?: string;
}

export const educationData: Record<Lang, { degrees: Degree[]; certs: Cert[] }> = {
  en: {
    degrees: [
      { degree: 'MBA – Management', institution: 'Wrocław University of Economics', years: '2012–2014', icon: iconMba, highlight: 'primary' },
      { degree: 'Clinical Laboratory Diagnostician Specialist', institution: 'Wrocław Medical University', years: '2006–2009', icon: iconLab, highlight: 'clinical' },
      { degree: 'Postgraduate – Business Management', institution: 'University of Wrocław', years: '1999–2000', icon: iconBook, highlight: false },
      { degree: 'MSc – Biology', institution: 'University of Wrocław', years: '1994–1999', icon: iconLab, highlight: false },
    ],
    certs: [
      { name: 'CEO Academy', issuer: 'Laba International Business School', year: 'December 2025' },
      { name: 'Operations Director', issuer: 'Laba International Business School', year: '2024' },
      { name: 'ICAN Business Advisor', issuer: 'Harvard Business Review Poland / ICAN Institute', year: '2018–2019', description: 'Leadership, Strategy, Marketing, Finance' },
      { name: 'Certified Haematology Trainer', issuer: 'Mindray Medical', year: '2022' },
    ],
  },
  pl: {
    degrees: [
      { degree: 'MBA – Zarządzanie', institution: 'Uniwersytet Ekonomiczny we Wrocławiu', years: '2012–2014', icon: iconMba, highlight: 'primary' },
      { degree: 'Specjalista Diagnostyki Laboratoryjnej', institution: 'Akademia Medyczna we Wrocławiu', years: '2006–2009', icon: iconLab, highlight: 'clinical' },
      { degree: 'Podyplomowe – Zarządzanie jednostkami gospodarczymi', institution: 'Uniwersytet Wrocławski', years: '1999–2000', icon: iconBook, highlight: false },
      { degree: 'Magister – Biologia', institution: 'Uniwersytet Wrocławski', years: '1994–1999', icon: iconLab, highlight: false },
    ],
    certs: [
      { name: 'CEO Academy', issuer: 'Laba International Business School', year: 'Grudzień 2025' },
      { name: 'Operations Director', issuer: 'Laba International Business School', year: '2024' },
      { name: 'ICAN Business Advisor', issuer: 'Harvard Business Review Poland / ICAN Institute', year: '2018–2019', description: 'Leadership, Strategy, Marketing, Finance' },
      { name: 'Certyfikowany Trener Hematologii', issuer: 'Mindray Medical', year: '2022' },
    ],
  },
};
