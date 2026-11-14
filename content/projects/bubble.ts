import type { Project } from "../types";

const project: Project = {
  slug: "bubble",
  published: true,
  order: 2025.2,
  title: "Bubble",
  subtitle: { de: "Alltagsunterstützung für Borderline", en: "Everyday support for people with borderline" },
  year: "2024–25",
  duration: { de: "Oktober 2024 – Januar 2025", en: "October 2024 – January 2025" },
  context: {
    de: "Invention Design 1 · 3. Semester · Prof. David Oswald",
    en: "Invention Design 1 · 3rd semester · Prof. David Oswald",
  },
  team: [
    { name: "Yasmin Hähnel", url: "https://yasminhaehnel.com" },
    { name: "Lea Ullmann", url: "https://leaullmann.de" },
    { name: "Vanessa Hiller", url: "https://vanessahiller.de" },
  ],
  tools: ["Figma", "Miro", "Notion", "Premiere Pro", "After Effects"],
  focus: [
    { de: "Research", en: "Research" },
    { de: "Konzept", en: "Concept" },
    { de: "Wireframes", en: "Wireframes" },
    { de: "Screen Design", en: "Screen design" },
  ],
  disciplines: { de: "App · Wearable · KI", en: "App · Wearable · AI" },
  cover: {
    src: "/img/bubble/cover.webp",
    w: 2000,
    h: 1268,
    alt: {
      de: "Bubble auf Tablet, Smartphone und Smartwatch",
      en: "Bubble on tablet, smartphone and smartwatch",
    },
  },
  hero: {
    src: "/img/bubble/cover.webp",
    w: 2000,
    h: 1268,
    alt: {
      de: "Bubble auf Tablet, Smartphone und Smartwatch",
      en: "Bubble on tablet, smartphone and smartwatch",
    },
  },
  summary: {
    de: "Bubble zeigt, wie digitale Technologien Menschen mit Borderline-Persönlichkeitsstörung im Alltag unterstützen können. Eine Smartwatch erkennt kritische Momente über biometrische Daten, die App hilft mit einer KI-gestützten Reflexion, diese Momente zu verstehen – und ein Therapiemodus bringt die Erkenntnisse in die Sitzung.",
    en: "Bubble shows how digital technology can support people with borderline personality disorder in everyday life. A smartwatch recognises critical moments through biometric data, the app helps to understand them with an AI-supported reflection – and a therapy mode brings the findings into the session.",
  },
  challenge: {
    de: "Wie können wir Menschen mit Borderline dabei unterstützen, kritische Situationen zu reflektieren, Muster zu erkennen und passende Bewältigungsstrategien zu finden – begleitend zur Therapie, nicht als ihr Ersatz?",
    en: "How might we help people with borderline reflect on critical situations, recognise patterns and find suitable coping strategies – alongside therapy, not as a replacement for it?",
  },
  chapters: [
    {
      id: "thema",
      nav: { de: "Themenfindung", en: "Finding the topic" },
      title: { de: "Von der offenen Frage zum Fokus", en: "From an open question to a focus" },
      text: [
        {
          de: "Der Kurs Invention Design fragt, welche Probleme künftig relevant werden. In der Ideenphase interessierte uns ein persönlicher Assistent für Menschen mit Persönlichkeitsstörungen – eine Art „Bubble“, die in überfordernden Situationen abschirmt.",
          en: "The Invention Design course asks which problems will become relevant in the future. In the idea phase we were drawn to a personal assistant for people with personality disorders – a kind of “bubble” that shields them in overwhelming situations.",
        },
        {
          de: "Wir recherchierten Borderline, Schizophrenie und die narzisstische Persönlichkeitsstörung mit Mindmaps zu Symptomen und Behandlung. Alle drei abzudecken wäre nicht seriös gewesen – sie sind zu verschieden. Borderline bot das größte Potenzial für eine wirklich hilfreiche Unterstützung.",
          en: "We researched borderline, schizophrenia and narcissistic personality disorder using mind maps on symptoms and treatment. Covering all three would not have been credible – they are too different. Borderline offered the greatest potential for genuinely helpful support.",
        },
      ],
      methods: [
        { de: "Brainstorming", en: "Brainstorming" },
        { de: "Mindmaps", en: "Mind maps" },
        { de: "Themenvergleich", en: "Topic comparison" },
      ],
    },
    {
      id: "research",
      nav: { de: "Research", en: "Research" },
      title: { de: "Ein sensibles Thema aus vielen Perspektiven", en: "A sensitive topic from many perspectives" },
      text: [
        {
          de: "Uns war wichtig, das Thema mit der nötigen Sensibilität zu behandeln. Neben Desk Research zu Symptomen, Therapieansätzen und sogenannten Skills analysierten wir den Markt und bestehende Technologien – von Emotionserkennung bis zu KI in der Therapie.",
          en: "It mattered to us to treat the topic with the necessary sensitivity. Alongside desk research on symptoms, therapy approaches and so-called skills, we analysed the market and existing technologies – from emotion recognition to AI in therapy.",
        },
        {
          de: "Wir sprachen mit einer Pflegefachkraft aus der Psychiatrie, einer ambulanten Familienhilfe und einer Psychotherapeutin. Um zu entscheiden, wo wir ansetzen, skizzierten wir den Verlauf der Erkrankung – einmal aus Sicht der Betroffenen, einmal aus Sicht der Angehörigen.",
          en: "We spoke to a psychiatric nurse, an outpatient family support worker and a psychotherapist. To decide where to start, we mapped the course of the illness – once from the perspective of those affected, once from that of their relatives.",
        },
      ],
      methods: [
        { de: "Desk Research", en: "Desk research" },
        { de: "Marktanalyse", en: "Market analysis" },
        { de: "Technologie-Recherche", en: "Technology research" },
        { de: "Experteninterviews", en: "Expert interviews" },
        { de: "Journey Map", en: "Journey map" },
      ],
      insights: [
        {
          title: { de: "Es gibt kaum Angebote zur Reflexion", en: "There is hardly anything for reflection" },
          text: {
            de: "Die meisten Apps tracken oder vermitteln Skills. Zur Reflexion in direkter Verbindung mit Borderline fanden wir keine Anwendung.",
            en: "Most apps track or teach skills. We found no application for reflection directly related to borderline.",
          },
        },
        {
          title: { de: "Unterstützen, nicht therapieren", en: "Support, not therapy" },
          text: {
            de: "Die persönliche Betreuung bleibt zentral. Unser Produkt soll die Therapie begleiten.",
            en: "Personal care remains central. Our product is meant to accompany therapy.",
          },
        },
        {
          title: { de: "Das Umfeld gehört dazu", en: "The people around matter" },
          text: {
            de: "Angehörige fühlen sich oft hilflos. Vertrauenspersonen einzubeziehen kann kritische Momente entschärfen.",
            en: "Relatives often feel helpless. Involving trusted people can defuse critical moments.",
          },
        },
      ],
    },
    {
      id: "synthese",
      nav: { de: "Synthese", en: "Synthesis" },
      title: { de: "Ziel und Zielgruppe schärfen", en: "Sharpening goal and target group" },
      text: [
        {
          de: "Aus den Interviews leiteten wir Lösungsansätze und Ziele ab und verdichteten sie in Personas: eine junge Betroffene in ambulanter Therapie und ihr Partner als Angehöriger. Damit stand fest, was Bubble sein soll: ein therapiebegleitendes Wearable mit App, das hilft, Trigger zu erkennen und den Alltag zu reflektieren.",
          en: "From the interviews we derived possible solutions and goals and condensed them into personas: a young woman in outpatient therapy and her partner as a relative. This defined what Bubble should be: a wearable with an app that accompanies therapy and helps to recognise triggers and reflect on everyday life.",
        },
      ],
      methods: [
        { de: "Interview-Insights", en: "Interview insights" },
        { de: "Personas", en: "Personas" },
        { de: "Zieldefinition", en: "Goal definition" },
      ],
    },
    {
      id: "konzept",
      nav: { de: "Konzept", en: "Concept" },
      title: { de: "Ideen sichtbar machen", en: "Making ideas visible" },
      text: [
        {
          de: "Jedes Teammitglied skizzierte zunächst allein, dann visualisierten wir mit Crazy 8 in kurzer Zeit viele Ansätze und bewerteten ihre Umsetzbarkeit – auch technisch. Daraus entstanden Userflow und Informationsarchitektur.",
          en: "Each team member sketched alone first, then we used crazy 8 to visualise many approaches in a short time and assessed their feasibility – including technically. This resulted in the user flow and information architecture.",
        },
        {
          de: "Ein Storyboard erzählt einen Tag im Leben einer Schülerin: Auf dem Pausenhof steigen die Messwerte, die Smartwatch vibriert, abends reflektiert sie den Moment mit Bubble, am nächsten Tag bespricht sie ihn in der Therapie.",
          en: "A storyboard tells a day in the life of a student: in the schoolyard her readings rise, the smartwatch vibrates, in the evening she reflects on the moment with Bubble, and the next day she discusses it in therapy.",
        },
      ],
      methods: [
        { de: "Crazy 8", en: "Crazy 8" },
        { de: "Userflow", en: "User flow" },
        { de: "Informationsarchitektur", en: "Information architecture" },
        { de: "Storyboard", en: "Storyboard" },
      ],
      images: [
        {
          src: "/img/bubble/process.webp",
          w: 1995,
          h: 1988,
          alt: { de: "Wireframes der Bubble-App", en: "Wireframes of the Bubble app" },
          caption: { de: "Wireframes der App.", en: "Wireframes of the app." },
        },
      ],
    },
    {
      id: "umsetzung",
      nav: { de: "Umsetzung", en: "Implementation" },
      title: { de: "Vom Wireframe zum klickbaren Prototyp", en: "From wireframe to clickable prototype" },
      text: [
        {
          de: "Ein Styleguide sorgte für ein einheitliches Bild über Smartwatch, App und Tablet. Wir verfeinerten die Wireframes schrittweise zum finalen Design und bauten einen Klickdummy, der die Abläufe erlebbar macht. Für das Video schrieben wir ein Skript, drehten und schnitten selbst.",
          en: "A style guide ensured a consistent look across smartwatch, app and tablet. We refined the wireframes step by step into the final design and built a click dummy that makes the flows tangible. For the video we wrote a script, then filmed and edited it ourselves.",
        },
      ],
      methods: [
        { de: "Styleguide", en: "Style guide" },
        { de: "Wireframes", en: "Wireframes" },
        { de: "Klickdummy", en: "Click dummy" },
        { de: "Videoskript", en: "Video script" },
      ],
    },
    {
      id: "ergebnis",
      nav: { de: "Ergebnis", en: "Result" },
      title: { de: "Drei Geräte, ein Zusammenspiel", en: "Three devices working together" },
      text: [
        {
          de: "App: Die Hauptfunktion ist die Reflexion. Nutzer:innen sehen Messdaten und kritische Momente und führen täglich eine KI-gestützte Reflexion mit „Bubble“ durch. Sie wird dokumentiert und ist später im Journal wieder einsehbar.",
          en: "App: the main function is reflection. Users see their readings and critical moments and carry out a daily AI-supported reflection with “Bubble”. It is documented and can be viewed again later in the journal.",
        },
        {
          de: "Smartwatch: Sie misst biometrische Daten und erkennt kritische Momente. Steigen die Werte, kommt eine Benachrichtigung – auf Wunsch werden hinterlegte Vertrauenspersonen in der Nähe informiert.",
          en: "Smartwatch: it measures biometric data and recognises critical moments. When the readings rise, a notification appears – if desired, stored trusted people nearby are informed.",
        },
        {
          de: "Tablet: Im Therapiemodus entscheiden Nutzer:innen selbst, welche Daten sie mit Therapeut:innen teilen. Nach der Sitzung wird der Modus deaktiviert.",
          en: "Tablet: in therapy mode users decide for themselves which data they share with their therapist. After the session the mode is deactivated.",
        },
        {
          de: "Unsere Annahme: KI wird – mit Trainingsdaten aus dem therapeutischen Kontext – künftig therapieunterstützend wirken können.",
          en: "Our assumption: with training data from a therapeutic context, AI will in future be able to support therapy.",
        },
      ],
      images: [
        {
          src: "/img/bubble/app.webp",
          w: 1256,
          h: 884,
          alt: { de: "Zwei Screens der Bubble-App", en: "Two screens of the Bubble app" },
          caption: { de: "App: tägliche Reflexion mit Bubble.", en: "App: daily reflection with Bubble." },
        },
        {
          src: "/img/bubble/smartwatch.webp",
          w: 2000,
          h: 1789,
          alt: { de: "Drei Smartwatch-Screens", en: "Three smartwatch screens" },
          caption: { de: "Smartwatch: erkennt kritische Momente.", en: "Smartwatch: recognises critical moments." },
        },
        {
          src: "/img/bubble/tablet.webp",
          w: 1183,
          h: 927,
          alt: { de: "Therapiemodus auf dem Tablet", en: "Therapy mode on the tablet" },
          caption: { de: "Tablet: Therapiemodus mit freigegebenen Daten.", en: "Tablet: therapy mode with shared data." },
        },
      ],
    },
  ],
  youtubeId: "JB0M_5JVKgQ",
  seoDescription: {
    de: "Bubble unterstützt Menschen mit Borderline im Alltag: Smartwatch, App und Therapiemodus für KI-gestützte Reflexion. Research, Konzept und Screen Design.",
    en: "Bubble supports people with borderline in everyday life: smartwatch, app and therapy mode for AI-supported reflection. Research, concept and screen design.",
  },
};

export default project;
