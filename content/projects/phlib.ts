import type { Project } from "../types";

const project: Project = {
  slug: "phlib",
  published: true,
  order: 2025.1,
  title: "Phlib",
  subtitle: { de: "Finde, was du wirklich lesen willst", en: "Find what you really want to read" },
  year: "2024–25",
  duration: { de: "Oktober 2024 – Januar 2025", en: "October 2024 – January 2025" },
  context: {
    de: "Application Design 1 · 3. Semester · Kai Wanschura",
    en: "Application Design 1 · 3rd semester · Kai Wanschura",
  },
  team: [
    { name: "Vanessa Hiller", url: "https://vanessahiller.de" },
    { name: "Hope Sikuade" },
  ],
  tools: ["Figma", "Miro", "Notion", "Premiere Pro", "After Effects"],
  focus: [
    { de: "Research", en: "Research" },
    { de: "Konzept", en: "Concept" },
    { de: "UI Design", en: "UI design" },
    { de: "Prototyp", en: "Prototype" },
    { de: "Videoschnitt", en: "Video editing" },
  ],
  disciplines: { de: "App · Web · UI", en: "App · Web · UI" },
  cover: {
    src: "/img/phlib/cover.webp",
    w: 2000,
    h: 1268,
    alt: { de: "Zwei Smartphones mit der Phlib-App", en: "Two smartphones showing the Phlib app" },
  },
  hero: {
    src: "/img/phlib/cover.webp",
    w: 2000,
    h: 1268,
    alt: { de: "Zwei Smartphones mit der Phlib-App", en: "Two smartphones showing the Phlib app" },
  },
  summary: {
    de: "Phlib ist ein Redesign der Bücher-Plattform Goodreads für die Gen Z. Statt starrer Listen und allgemeiner Trends liefert die App Empfehlungen, die zu den eigenen Vorlieben passen – und manchmal bewusst aus der Komfortzone locken.",
    en: "Phlib is a redesign of the book platform Goodreads for Gen Z. Instead of rigid lists and general trends, the app delivers recommendations that match personal taste – and sometimes deliberately tempt readers out of their comfort zone.",
  },
  challenge: {
    de: "Wie können wir die Buchsuche erleichtern und Empfehlungen so persönlich machen, dass Leser:innen schnell ihr nächstes Buch finden?",
    en: "How might we make searching for books easier and recommendations so personal that readers quickly find their next book?",
  },
  chapters: [
    {
      id: "entscheidung",
      nav: { de: "Entscheidung", en: "Decision" },
      title: { de: "Welche App verdient ein Redesign?", en: "Which app deserves a redesign?" },
      text: [
        {
          de: "Aufgabe war, eine bestehende App weiterzuentwickeln. Wir sammelten Kandidaten und diskutierten sie gemeinsam: Manche waren schon zu ausgereift, andere zu kommerziell. Übrig blieben Goodreads und LymphaTrack.",
          en: "The task was to develop an existing app further. We collected candidates and discussed them together: some were already too mature, others too commercial. Goodreads and LymphaTrack remained.",
        },
        {
          de: "Eine Pro-und-Contra-Analyse und Gespräche mit Betroffenen gaben den Ausschlag: Für LymphaTrack wäre eine Website ausreichend gewesen. Bei Goodreads kannten wir die Schwächen aus eigener Nutzung, und die Zielgruppe war gut erreichbar.",
          en: "A pros-and-cons analysis and conversations with those affected tipped the balance: for LymphaTrack a website would have been enough. With Goodreads we knew the weaknesses from our own use, and the target group was easy to reach.",
        },
      ],
      methods: [
        { de: "Brainstorming", en: "Brainstorming" },
        { de: "Pro-/Contra-Analyse", en: "Pros and cons analysis" },
      ],
    },
    {
      id: "research",
      nav: { de: "Research", en: "Research" },
      title: { de: "Verstehen, wie die Gen Z liest", en: "Understanding how Gen Z reads" },
      text: [
        {
          de: "Mit einem Value Proposition Canvas klärten wir das Wertversprechen. Eine Umfrage lieferte die Breite, sechs Interviews die Tiefe: Wie finden Leser:innen Bücher, was motiviert sie, was fehlt ihnen in bestehenden Apps?",
          en: "A value proposition canvas clarified the value proposition. A survey provided breadth, six interviews depth: how do readers find books, what motivates them, what do they miss in existing apps?",
        },
        {
          de: "Desk Research und eine Konkurrenzanalyse von READO, The StoryGraph und Bookly ergänzten das Bild.",
          en: "Desk research and a competitor analysis of READO, The StoryGraph and Bookly completed the picture.",
        },
      ],
      methods: [
        { de: "Value Proposition Canvas", en: "Value proposition canvas" },
        { de: "Umfrage", en: "Survey" },
        { de: "6 Interviews", en: "6 interviews" },
        { de: "Desk Research", en: "Desk research" },
        { de: "Konkurrenzanalyse", en: "Competitor analysis" },
      ],
      insights: [
        {
          title: { de: "BookTok verändert den Buchkauf", en: "BookTok is changing how books are bought" },
          text: {
            de: "2023 wurden in Deutschland über 12 Millionen Bücher verkauft, die auf TikTok empfohlen wurden – 56 Prozent mehr als im Vorjahr.",
            en: "In 2023 more than 12 million books recommended on TikTok were sold in Germany – 56 percent more than the year before.",
          },
        },
        {
          title: { de: "Empfehlungen sind zu allgemein", en: "Recommendations are too generic" },
          text: {
            de: "Bestehende Algorithmen wiederholen sich und treffen selten den persönlichen Geschmack.",
            en: "Existing algorithms repeat themselves and rarely match personal taste.",
          },
        },
        {
          title: { de: "Das gedruckte Buch bleibt vorn", en: "The printed book stays ahead" },
          text: {
            de: "Trotz E-Books und Hörbüchern lesen die meisten weiterhin auf Papier.",
            en: "Despite e-books and audiobooks, most people still read on paper.",
          },
        },
      ],
    },
    {
      id: "synthese",
      nav: { de: "Synthese", en: "Synthesis" },
      title: { de: "Drei Personas, ein Ziel", en: "Three personas, one goal" },
      text: [
        {
          de: "Aus der Recherche entstanden drei Personas, die unsere Zielgruppe abbilden: Alina Klar will Ordnung in ihre Bücher bringen, Hazel Herz sucht Austausch, Romeo Review braucht verlässliche Empfehlungen für den nächsten Kauf. Mit How-Might-We-Fragen übersetzten wir ihre Probleme in Gestaltungschancen.",
          en: "The research resulted in three personas representing our target group: Alina Klar wants to bring order to her books, Hazel Herz is looking for exchange, Romeo Review needs reliable recommendations for his next purchase. With how-might-we questions we translated their problems into design opportunities.",
        },
      ],
      methods: [
        { de: "Personas", en: "Personas" },
        { de: "How Might We", en: "How might we" },
        { de: "Zieldefinition", en: "Goal definition" },
      ],
      quote: {
        text: {
          de: "Unser Ziel ist eine App, die das Büchersuchen erleichtert und Vorschläge findet, die auf die Person zugeschnitten sind.",
          en: "Our goal is an app that makes searching for books easier and finds suggestions tailored to the person.",
        },
        source: { de: "Zieldefinition", en: "Goal definition" },
      },
      images: [
        {
          src: "/img/phlib/persona.webp",
          w: 2000,
          h: 1125,
          alt: { de: "Persona Romeo Review mit Zielen und Schmerzpunkten", en: "Persona Romeo Review with goals and pain points" },
          caption: { de: "Persona Romeo Review.", en: "Persona Romeo Review." },
        },
      ],
    },
    {
      id: "konzept",
      nav: { de: "Konzept", en: "Concept" },
      title: { de: "Struktur vor Oberfläche", en: "Structure before surface" },
      text: [
        {
          de: "Ein High-Level User Flow zeigte für jede Persona den Weg zum Ziel. Daraus entwickelten wir in mehreren Runden die Informationsarchitektur mit vier Bereichen: Entdecken, Freunde, Bibliothek und Profil. Erste Wireframes verbanden wir zu einem Wireflow; ein Moodboard legte die Stilrichtung fest.",
          en: "A high-level user flow showed the path to the goal for each persona. From this we developed the information architecture in several rounds, with four areas: discover, friends, library and profile. We connected the first wireframes into a wireflow; a mood board set the visual direction.",
        },
      ],
      methods: [
        { de: "High-Level User Flow", en: "High-level user flow" },
        { de: "Informationsarchitektur", en: "Information architecture" },
        { de: "Wireframes", en: "Wireframes" },
        { de: "Wireflow", en: "Wireflow" },
        { de: "Moodboard", en: "Mood board" },
      ],
      images: [
        {
          src: "/img/phlib/wireframes.webp",
          w: 2000,
          h: 1390,
          alt: { de: "Handgezeichnete Wireframes der App", en: "Hand-drawn wireframes of the app" },
          caption: { de: "Erste Wireframes.", en: "First wireframes." },
        },
        {
          src: "/img/phlib/wireframes-2.webp",
          w: 2000,
          h: 1390,
          alt: { de: "Weitere handgezeichnete Wireframes", en: "More hand-drawn wireframes" },
          caption: { de: "Varianten für Home und Profil.", en: "Variants for home and profile." },
        },
      ],
    },
    {
      id: "umsetzung",
      nav: { de: "Umsetzung", en: "Implementation" },
      title: { de: "Von Mid-Fidelity zu High-Fidelity", en: "From mid-fidelity to high-fidelity" },
      text: [
        {
          de: "Mid-Fidelity-Wireframes zeigten den funktionalen Aufbau, ein Styleguide mit Logo, Farben, Typografie und Komponenten sorgte für Konsistenz. Daraus entstanden High-Fidelity-Screens und ein Klickdummy. Ein Storyboard und ein Video erklären das Konzept; eine Web-Ansicht rundet das Erlebnis ab.",
          en: "Mid-fidelity wireframes showed the functional structure; a style guide with logo, colours, typography and components ensured consistency. This led to high-fidelity screens and a click dummy. A storyboard and a video explain the concept; a web view completes the experience.",
        },
      ],
      methods: [
        { de: "Styleguide", en: "Style guide" },
        { de: "High-Fidelity Screens", en: "High-fidelity screens" },
        { de: "Klickdummy", en: "Click dummy" },
        { de: "Storyboard", en: "Storyboard" },
      ],
    },
    {
      id: "ergebnis",
      nav: { de: "Ergebnis", en: "Result" },
      title: { de: "Entdecken, matchen, gemeinsam lesen", en: "Discover, match, read together" },
      text: [
        {
          de: "Entdecken: jeden Tag neue Inspiration mit dem Match des Tages, den Top-Büchern der Woche und Empfehlungen von Freund:innen.",
          en: "Discover: new inspiration every day with the match of the day, the top books of the week and recommendations from friends.",
        },
        {
          de: "BookMatch: der schnellste Weg zu neuen Büchern. Per Swipe entscheiden Nutzer:innen sofort, ob ein Buch interessant klingt; Filter machen die Suche gezielt.",
          en: "BookMatch: the fastest way to new books. With a swipe users decide immediately whether a book sounds interesting; filters make the search targeted.",
        },
        {
          de: "Bibliothek, Buddyreads und Social Feed: Leselisten organisieren, den Fortschritt verfolgen, gemeinsam lesen und sehen, was Freund:innen gerade lesen. Lesestatistiken, Streaks und Challenges motivieren.",
          en: "Library, buddy reads and social feed: organise reading lists, track progress, read together and see what friends are reading. Reading statistics, streaks and challenges keep readers motivated.",
        },
        {
          de: "Die Web-Ansicht bietet dieselben Kernfunktionen in einem Layout für größere Bildschirme.",
          en: "The web view offers the same core functions in a layout for larger screens.",
        },
      ],
      images: [
        {
          src: "/img/phlib/discover.webp",
          w: 2000,
          h: 1334,
          alt: { de: "Entdecken-Seite der Phlib-App", en: "Discover page of the Phlib app" },
          caption: { de: "Entdecken und BookMatch.", en: "Discover and BookMatch." },
        },
        {
          src: "/img/phlib/website.webp",
          w: 1323,
          h: 828,
          alt: { de: "Phlib als Web-Anwendung auf einem Laptop", en: "Phlib as a web application on a laptop" },
          caption: { de: "Die Web-Ansicht.", en: "The web view." },
        },
      ],
    },
  ],
  youtubeId: "3Qm4kqPUMQ0",
  seoDescription: {
    de: "Phlib ist ein Goodreads-Redesign für die Gen Z: persönliche Buchempfehlungen, BookMatch und Buddyreads. Research, Konzept, UI Design und Prototyp.",
    en: "Phlib is a Goodreads redesign for Gen Z: personal book recommendations, BookMatch and buddy reads. Research, concept, UI design and prototype.",
  },
};

export default project;
