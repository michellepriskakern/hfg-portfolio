import type { L } from "~/composables/useLang";

/**
 * Allgemeine Texte der Website (Navigation, Startseite, About, Kontakt).
 * Jeder Text hat eine deutsche und eine englische Fassung.
 */
export const site = {
  name: "Michelle Kern",
  email: "michelle.kern@outlook.de",
  linkedin: "https://www.linkedin.com/in/michelle-kern-40a64b356/",
  role: { de: "Interaktionsgestaltung", en: "Interaction Design" } as L,
  location: "Schwäbisch Gmünd",

  nav: [
    { to: "/", label: { de: "Work", en: "Work" } as L },
    { to: "/about", label: { de: "About", en: "About" } as L },
    { to: "/contact", label: { de: "Kontakt", en: "Contact" } as L },
  ],

  home: {
    claimLead: { de: "Always searching for", en: "Always searching for" } as L,
    claimWords: ["meaningful experiences", "better interactions", "new ideas"],
    intro: {
      de: "Ich bin Michelle, Interaktionsgestalterin an der HfG Schwäbisch Gmünd. Mich interessiert, warum wir Produkte auf eine bestimmte Art nutzen – und wie Gestaltung dieses Verhalten verändert.",
      en: "I'm Michelle, an interaction designer at HfG Schwäbisch Gmünd. I'm interested in why we use products the way we do – and how design changes that behaviour.",
    } as L,
    role: {
      // \n = Zeilenumbruch auf großen Bildschirmen (auf dem Handy fließt der Text normal)
      de: "Interaktionsgestalterin aus Schwäbisch Gmünd\nmit Fokus auf digitale Produkte und\nnutzerzentriertes Gestalten.",
      en: "Interaction designer based in Schwäbisch Gmünd,\nfocused on digital products\nand user-centred design.",
    } as L,
    workTitle: { de: "Ausgewählte Arbeiten", en: "Selected work" } as L,
    scroll: { de: "Scrollen", en: "Scroll" } as L,
    aboutTeaser: {
      de: "Design bedeutet für mich, Funktion, Material, Nutzung und Kontext zusammenzudenken und daraus Erlebnisse zu entwickeln.",
      en: "To me, design means thinking about function, material, use and context together and turning them into experiences.",
    } as L,
    aboutLink: { de: "Mehr über mich", en: "More about me" } as L,
  },

  about: {
    title: { de: "Über mich", en: "About" } as L,
    /** Wörter in [[doppelten Klammern|bild]] werden hervorgehoben; beim Hover erscheint das Bild. */
    statement: {
      de: "Hi, ich bin Michelle. Ich gestalte mit [[Intention|/img/zenzone/cover.webp]] – digital und zum Anfassen. Mich treibt die Frage, [[warum|/img/cura/sketches.webp]] wir Dinge so nutzen, wie wir sie nutzen. Am liebsten arbeite ich [[im Team|/img/zenzone/testing.webp]], probiere [[Neues|/img/about/skydiving.webp]] aus und bringe Ordnung in [[komplexe Themen|/img/cura/synthesis.webp]].",
      en: "Hi, I'm Michelle. I design with [[intention|/img/zenzone/cover.webp]] – digital and tangible. I'm driven by the question of [[why|/img/cura/sketches.webp]] we use things the way we do. I love working [[in a team|/img/zenzone/testing.webp]], trying [[new things|/img/about/skydiving.webp]] and bringing order to [[complex topics|/img/cura/synthesis.webp]].",
    } as L,
    sections: [
      {
        title: { de: "Wer ich bin", en: "Who I am" } as L,
        text: {
          de: "Ich studiere Interaktionsgestaltung in Schwäbisch Gmünd. Neben dem Studium findet man mich oft mit einem Buch in der Hand, auf Skiern oder in Museen – überall dort, wo es etwas Neues zu entdecken gibt. Ich liebe es, Eindrücke aufzusaugen und daraus kreative Verbindungen zu schaffen. Außerdem bin ich eine echte Nachteule: Abends kommen mir oft die besten Ideen.",
          en: "I study interaction design in Schwäbisch Gmünd. Outside university you'll often find me with a book in my hand, on skis or in museums – wherever there is something new to discover. I love soaking up impressions and turning them into creative connections. I'm also a real night owl: my best ideas often come in the evening.",
        } as L,
      },
      {
        title: { de: "Wie ich vorgehe", en: "How I work" } as L,
        text: {
          de: "Ich arbeite gerne strukturiert und mit einem Plan – auch wenn das in der Praxis mal besser und mal schlechter funktioniert. Besonders wichtig ist mir die Arbeit im Team. Man lernt unglaublich viel voneinander, bekommt neue Perspektiven und entwickelt gemeinsam bessere Lösungen.",
          en: "I like to work in a structured way and with a plan – even if that works better some days than others. Teamwork is especially important to me. You learn an incredible amount from each other, gain new perspectives and develop better solutions together.",
        } as L,
      },
      {
        title: { de: "Was mir wichtig ist", en: "What matters to me" } as L,
        text: {
          de: "Bei einem neuen Produkt interessiert mich, wie es unser Verhalten beeinflusst. Ich möchte mit Intention gestalten – bewusst Erfahrungen schaffen, die über das eigentliche Produkt hinausgehen. Ein gutes Produkt entsteht aus guter Zusammenarbeit, bei der alle ihre Perspektive einbringen.",
          en: "With a new product I'm interested in how it influences our behaviour. I want to design with intention – consciously creating experiences that go beyond the product itself. A good product comes from good collaboration in which everyone contributes their perspective.",
        } as L,
      },
    ],
    cvTitle: { de: "Lebenslauf", en: "CV" } as L,
    education: {
      title: { de: "Ausbildung", en: "Education" } as L,
      items: [
        {
          time: { de: "10/2023 – heute", en: "10/2023 – today" } as L,
          title: { de: "B.A. Interaktionsgestaltung", en: "B.A. Interaction Design" } as L,
          place: "Hochschule für Gestaltung Schwäbisch Gmünd",
        },
        {
          time: "09/2019 – 07/2022" as L,
          title: { de: "Allgemeine Hochschulreife", en: "University entrance qualification (Abitur)" } as L,
          place: { de: "St. Josef Schwäbisch Gmünd · Pädagogik, Psychologie", en: "St. Josef Schwäbisch Gmünd · education, psychology" } as L,
        },
      ],
    },
    experience: {
      title: { de: "Erfahrung", en: "Experience" } as L,
      items: [
        {
          time: "08/2024 – 09/2024" as L,
          title: { de: "Hilfskraft im Krankenhaus", en: "Hospital assistant" } as L,
          place: "Rems-Murr-Klinikum",
        },
        {
          time: "09/2022 – 09/2023" as L,
          title: { de: "Bundesfreiwilligendienst", en: "Federal volunteer service" } as L,
          place: { de: "Eule Wissenswerkstatt · Kursplanung, Arbeiten mit Kindern, Werkstoffbearbeitung", en: "Eule Wissenswerkstatt · course planning, working with children, materials workshop" } as L,
        },
        {
          time: "08/2021 – 08/2022" as L,
          title: { de: "Hilfskraft im Fitnessstudio", en: "Gym assistant" } as L,
          place: "Sports Club Orange",
        },
      ],
    },
    skills: {
      title: { de: "Kompetenzen", en: "Skills" } as L,
      items: ["User Research", "Usability Testing", "Wireframing", "Prototyping", "User Interface", "User Experience", "Visual Design"],
    },
    tools: {
      title: { de: "Tools", en: "Tools" } as L,
      items: ["Figma", "Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "Miro"],
    },
    languages: {
      title: { de: "Sprachen", en: "Languages" } as L,
      items: [
        { de: "Deutsch – Muttersprache", en: "German – native" },
        { de: "Englisch – C1", en: "English – C1" },
        { de: "Französisch – Grundlagen", en: "French – basic" },
      ] as L[],
    },
    interests: {
      title: { de: "Interessen", en: "Interests" } as L,
      items: [
        { de: "Lesen", en: "Reading" },
        { de: "Ski & Schlittschuh", en: "Skiing & ice skating" },
        { de: "Yoga", en: "Yoga" },
        { de: "Konzerte & Musicals", en: "Concerts & musicals" },
        { de: "Museen", en: "Museums" },
        { de: "Fotografie", en: "Photography" },
      ] as L[],
    },
  },

  contact: {
    title: { de: "Kontakt", en: "Contact" } as L,
    lead: {
      de: "Ich freue mich über Nachrichten zu Praktika, Projekten oder einfach einem Austausch über Gestaltung.",
      en: "I'm happy to hear about internships, projects or simply to talk about design.",
    } as L,
    cta: { de: "Lass uns sprechen.", en: "Let's talk." } as L,
    mail: { de: "E-Mail schreiben", en: "Write an email" } as L,
  },

  ui: {
    back: { de: "Alle Arbeiten", en: "All work" } as L,
    duration: { de: "Zeitraum", en: "Duration" } as L,
    context: { de: "Kontext", en: "Context" } as L,
    team: { de: "Team", en: "Team" } as L,
    tools: { de: "Tools", en: "Tools" } as L,
    focus: { de: "Schwerpunkte", en: "Focus" } as L,
    summary: { de: "Kurzfassung", en: "In short" } as L,
    challenge: { de: "Leitfrage", en: "Key question" } as L,
    process: { de: "Prozess", en: "Process" } as L,
    methods: { de: "Methoden", en: "Methods" } as L,
    insights: { de: "Erkenntnisse", en: "Insights" } as L,
    learnings: { de: "Was ich mitnehme", en: "What I take away" } as L,
    video: { de: "Video", en: "Video" } as L,
    videoLoad: { de: "Video laden", en: "Load video" } as L,
    videoNote: {
      de: "Mit dem Laden des Videos wird eine Verbindung zu YouTube hergestellt. Mehr dazu in der Datenschutzerklärung.",
      en: "Loading the video connects to YouTube. See the privacy policy for details.",
    } as L,
    next: { de: "Weitere Arbeiten", en: "More work" } as L,
    explore: { de: "explore", en: "explore" } as L,
    privacy: { de: "Datenschutz", en: "Privacy" } as L,
    imprint: { de: "Impressum", en: "Imprint" } as L,
    skip: { de: "Zum Inhalt springen", en: "Skip to content" } as L,
    langSwitch: { de: "Sprache wechseln", en: "Change language" } as L,
    notFound: { de: "Diese Seite gibt es nicht.", en: "This page does not exist." } as L,
  },
};
