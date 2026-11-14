import type { Project } from "../types";

const project: Project = {
  slug: "cura",
  published: true,
  order: 2026.2,
  title: "cura",
  subtitle: {
    de: "Intelligenter Assistent im Medikamenten-Befüllungsprozess",
    en: "An intelligent assistant for filling medication dispensers",
  },
  year: "2026",
  duration: { de: "März – Juli 2026", en: "March – July 2026" },
  context: {
    de: "Lean Design Project · 6. Semester · HfG Schwäbisch Gmünd, interdisziplinär mit der Hochschule Aalen",
    en: "Lean Design Project · 6th semester · HfG Schwäbisch Gmünd, interdisciplinary with Aalen University",
  },
  team: [
    { name: "Vanessa Hiller", url: "https://vanessahiller.de" },
    { name: "Hannes Uhl" },
  ],
  tools: ["Figma", "Miro", "GenAI-Tools", "Paper Prototyping"],
  focus: [
    { de: "User Research", en: "User research" },
    { de: "Konzept", en: "Concept" },
    { de: "Interface Design", en: "Interface design" },
    { de: "Usability Testing", en: "Usability testing" },
  ],
  disciplines: { de: "Interface · Hardware · UX", en: "Interface · Hardware · UX" },
  cover: {
    src: "/img/cura/prototype.webp",
    w: 2000,
    h: 1500,
    alt: {
      de: "Prototyp von cura: Tablet auf einem Ständer, davor ein Wochen-Dispenser mit farbigen Bechern",
      en: "cura prototype: a tablet on a stand with a weekly dispenser and coloured cups in front of it",
    },
  },
  hero: {
    src: "/img/cura/prototype.webp",
    w: 2000,
    h: 1500,
    alt: {
      de: "Aufbau des cura-Prototyps beim Usability-Test im Pflegeheim",
      en: "The cura prototype set up for the usability test in a care home",
    },
    caption: {
      de: "Der Prototyp beim Usability-Test in einem Pflegeheim in Schwäbisch Gmünd.",
      en: "The prototype during the usability test in a care home in Schwäbisch Gmünd.",
    },
  },
  summary: {
    de: "Pflegekräfte setzen täglich komplexe Medikationspläne um – unter Zeitdruck und mit ständigen Unterbrechungen. cura begleitet das Befüllen der Wochen-Dispenser: Das Gerät erkennt den Dispenser, zeigt den aktuellen Medikationsplan und prüft per Kamera, ob die richtigen Tabletten im richtigen Fach liegen.",
    en: "Nurses work through complex medication plans every day – under time pressure and with constant interruptions. cura supports the filling of weekly dispensers: the device recognises the dispenser, shows the current medication plan and uses a camera to check that the right tablets are in the right compartment.",
  },
  challenge: {
    de: "Wie kann die Kontrollsicherheit beim Stellen von Medikamenten im Altenheim gewährleistet werden, wenn das Vier-Augen-Prinzip wegen Personalmangel und Zeitdruck regelmäßig ausfällt?",
    en: "How can medication be checked reliably in care homes when the four-eyes principle regularly fails because of staff shortages and time pressure?",
  },
  chapters: [
    {
      id: "sprint",
      nav: { de: "Design Sprint", en: "Design sprint" },
      title: { de: "Fünf Tage, um das Feld zu verstehen", en: "Five days to understand the field" },
      text: [
        {
          de: "Wir starteten mit einem einwöchigen Design Sprint: Understand, Sketch, Decide, Build, Test. Über eine Mindmap und erste Desk Research grenzten wir das Themenfeld Gesundheit auf Medikamente ein – ein Bereich mit hoher Verantwortung und vielen Beteiligten.",
          en: "We started with a one-week design sprint: understand, sketch, decide, build, test. Using a mind map and initial desk research we narrowed the field of health down to medication – an area with high responsibility and many people involved.",
        },
        {
          de: "Ein wichtiges Learning kam früh: Wir hatten 17 How-Might-We-Fragen formuliert, bevor die Zielgruppe feststand – und merkten, dass sie dadurch zu breit blieben. Erst mit einer klaren Zielgruppe wurden die Fragen präzise. Sieben Interviews mit Menschen zwischen 23 und 81 Jahren und einer Pflegekraft zeigten dann, wo der Prozess wirklich hakt.",
          en: "An important lesson came early: we had written 17 how-might-we questions before the target group was defined – and realised they stayed too broad. Only a clear target group made the questions precise. Seven interviews with people aged 23 to 81 and a nurse then showed where the process really struggles.",
        },
      ],
      methods: [
        { de: "Design Sprint", en: "Design sprint" },
        { de: "Mindmap", en: "Mind map" },
        { de: "Desk Research", en: "Desk research" },
        { de: "Marktrecherche", en: "Market research" },
        { de: "How Might We", en: "How might we" },
        { de: "7 Interviews", en: "7 interviews" },
        { de: "As-Is Scenario", en: "As-is scenario" },
      ],
      insights: [
        {
          title: { de: "Das Befüllen ist die Fehlerquelle", en: "Filling is where errors happen" },
          text: {
            de: "Bestehende Lösungen erinnern an die Einnahme. Das Vorbereiten und Zuordnen der Tabletten bleibt Handarbeit – und genau dort entstehen Fehler.",
            en: "Existing solutions remind people to take their medication. Preparing and sorting the tablets is still manual work – and that is exactly where errors occur.",
          },
        },
        {
          title: { de: "Änderungen verunsichern", en: "Changes cause uncertainty" },
          text: {
            de: "Wird der Medikationsplan geändert, steigt das Risiko für Verwechslungen deutlich.",
            en: "When the medication plan changes, the risk of mix-ups rises considerably.",
          },
        },
      ],
      images: [
        {
          src: "/img/cura/synthesis.webp",
          w: 2000,
          h: 1505,
          alt: { de: "Whiteboard mit geclusterten Post-its", en: "Whiteboard with clustered sticky notes" },
          caption: {
            de: "Brainstorming und Clustering der Problemfelder.",
            en: "Brainstorming and clustering the problem areas.",
          },
        },
      ],
    },
    {
      id: "research",
      nav: { de: "Research vor Ort", en: "Field research" },
      title: { de: "Vom Privathaushalt ins Pflegeheim", en: "From private homes to the care home" },
      text: [
        {
          de: "Nach dem Sprint verlagerten wir den Fokus von älteren Menschen zu Hause auf die professionelle Pflege. Dort werden Medikamente für viele Bewohner:innen gleichzeitig gestellt – die Verantwortung ist größer, die Bedingungen sind härter.",
          en: "After the sprint we shifted the focus from older people at home to professional care. There, medication is prepared for many residents at once – the responsibility is greater and the conditions are tougher.",
        },
        {
          de: "Wir haben Pflegekräfte im Altenheim interviewt und beim Stellen der Medikamente begleitet. Aus Shadowing, Experteninterviews, Kontext- und Wettbewerbsanalyse entstanden eine Stakeholder Map, eine User Journey und die Persona Sabine, 54, Pflegefachkraft.",
          en: "We interviewed nurses in a care home and shadowed them while they prepared medication. Shadowing, expert interviews, context and competitor analysis led to a stakeholder map, a user journey and the persona Sabine, 54, a registered nurse.",
        },
      ],
      methods: [
        { de: "Shadowing", en: "Shadowing" },
        { de: "Experteninterviews", en: "Expert interviews" },
        { de: "Kontextanalyse", en: "Context analysis" },
        { de: "Stakeholder Map", en: "Stakeholder map" },
        { de: "User Journey", en: "User journey" },
        { de: "Persona", en: "Persona" },
      ],
      insights: [
        {
          title: { de: "Nicht die Kompetenz ist das Problem", en: "Competence is not the problem" },
          text: {
            de: "Pflegekräfte wissen, wie Medikamente korrekt gestellt werden. Es ist der Kontext – Zeitdruck, Unterbrechungen, Personalmangel –, der Fehler begünstigt.",
            en: "Nurses know how to prepare medication correctly. It is the context – time pressure, interruptions, staff shortages – that leads to errors.",
          },
        },
        {
          title: { de: "Medienbrüche kosten Aufmerksamkeit", en: "Media breaks cost attention" },
          text: {
            de: "Der Blick wechselt ständig zwischen ausgedrucktem Plan, Laptop und Dispenser.",
            en: "Attention constantly switches between the printed plan, the laptop and the dispenser.",
          },
        },
        {
          title: { de: "Die zweite Kontrolle fehlt oft", en: "The second check is often missing" },
          text: {
            de: "Das Vier-Augen-Prinzip ist vorgesehen, fällt im Alltag aber regelmäßig aus.",
            en: "The four-eyes principle is intended, but regularly drops out in day-to-day work.",
          },
        },
      ],
    },
    {
      id: "synthese",
      nav: { de: "Synthese", en: "Synthesis" },
      title: { de: "Eine Frage, an der sich alles ausrichtet", en: "One question that guides everything" },
      text: [
        {
          de: "Aus den Erkenntnissen formulierten wir unsere Question Zero, Design Principles und Anforderungen. Ein Value Proposition Canvas und Produktachsen halfen, den Nutzen zu schärfen. In einem Szenario-Workshop (STEEP, Future Wheel, Three Horizons) prüften wir, wie sich Pflege und Technologie bis 2030 entwickeln könnten – etwa durch die elektronische Patientenakte.",
          en: "From the findings we formulated our question zero, design principles and requirements. A value proposition canvas and product axes helped sharpen the benefit. In a scenario workshop (STEEP, future wheel, three horizons) we explored how care and technology might develop by 2030 – for example through the electronic patient record.",
        },
      ],
      methods: [
        { de: "Question Zero", en: "Question zero" },
        { de: "Design Principles", en: "Design principles" },
        { de: "Value Proposition Canvas", en: "Value proposition canvas" },
        { de: "Szenario-Workshop", en: "Scenario workshop" },
        { de: "STEEP", en: "STEEP" },
        { de: "Three Horizons", en: "Three horizons" },
      ],
      quote: {
        text: {
          de: "Wie können wir Kontrollmechanismen digital unterstützen, sodass eine Überprüfung auch ohne zweite Pflegekraft möglich ist?",
          en: "How might we support checks digitally so that verification is possible even without a second nurse?",
        },
        source: { de: "Unsere How-Might-We-Frage", en: "Our how-might-we question" },
      },
    },
    {
      id: "konzept",
      nav: { de: "Konzept", en: "Concept" },
      title: { de: "Vom Skizzenblatt zum System", en: "From sketch to system" },
      text: [
        {
          de: "Mit Crazy 8s und einem morphologischen Kasten entwickelten wir viele Varianten und strichen bewusst alles Mechanische: Ein vollautomatischer Wagen hätte das Problem nur verlagert. Übrig blieb ein Assistent, der den Menschen beim Stellen unterstützt, statt ihn zu ersetzen.",
          en: "Using crazy 8s and a morphological box we developed many variants and deliberately removed everything mechanical: a fully automated cart would only have moved the problem elsewhere. What remained is an assistant that supports people while they prepare medication instead of replacing them.",
        },
        {
          de: "Das System besteht aus drei Teilen: einer Sensorfläche, die den Dispenser per NFC den Bewohnerdaten zuordnet, einer Kamera mit KI-gestützter Tablettenerkennung und einem Interface, das mit der elektronischen Bewohnerakte verbunden ist. Daraus leiteten wir Informationsarchitektur, Wireframes und das Screen Design ab.",
          en: "The system has three parts: a sensor surface that links the dispenser to the resident's data via NFC, a camera with AI-based tablet recognition, and an interface connected to the electronic resident record. From this we derived the information architecture, wireframes and screen design.",
        },
      ],
      methods: [
        { de: "Crazy 8s", en: "Crazy 8s" },
        { de: "Morphologischer Kasten", en: "Morphological box" },
        { de: "Impact-/Effort-Matrix", en: "Impact/effort matrix" },
        { de: "Informationsarchitektur", en: "Information architecture" },
        { de: "Wireframes", en: "Wireframes" },
        { de: "Moodboard", en: "Mood board" },
      ],
      images: [
        {
          src: "/img/cura/sketches.webp",
          w: 2000,
          h: 1500,
          alt: { de: "Handskizzen erster Konzeptideen", en: "Hand sketches of early concept ideas" },
          caption: { de: "Crazy 8s: erste Konzeptideen.", en: "Crazy 8s: first concept ideas." },
        },
        {
          src: "/img/cura/wireframes.webp",
          w: 2000,
          h: 1500,
          alt: { de: "Skizzierte Wireframes auf Papier", en: "Sketched wireframes on paper" },
          caption: { de: "Wireframes auf Papier.", en: "Wireframes on paper." },
        },
        {
          src: "/img/cura/detection.webp",
          w: 1906,
          h: 914,
          alt: {
            de: "Testaufbau der Tablettenerkennung mit Kamerabild eines Dispensers",
            en: "Test set-up of the tablet recognition showing a camera image of a dispenser",
          },
          caption: {
            de: "Technischer Test: Erkennung der Fächer per Kamera.",
            en: "Technical test: recognising the compartments by camera.",
          },
        },
      ],
    },
    {
      id: "test",
      nav: { de: "Prototyp & Test", en: "Prototype & test" },
      title: { de: "Getestet, wo gestellt wird", en: "Tested where the work happens" },
      text: [
        {
          de: "Wir testeten einen Paper Prototype nach dem Wizard-of-Oz-Prinzip mit einer Pflegekraft in einem Pflegeheim in Schwäbisch Gmünd. Sie sprach ihre Gedanken laut aus, während wir beobachteten und protokollierten. Leitfrage: Erreicht sie ihr Ziel effizient, effektiv und zufriedenstellend?",
          en: "We tested a paper prototype using the Wizard of Oz method with a nurse in a care home in Schwäbisch Gmünd. She thought aloud while we observed and took notes. Guiding question: does she reach her goal efficiently, effectively and to her satisfaction?",
        },
      ],
      methods: [
        { de: "Paper Prototype", en: "Paper prototype" },
        { de: "Wizard of Oz", en: "Wizard of Oz" },
        { de: "Think Aloud", en: "Think aloud" },
        { de: "Testleitfaden", en: "Test guide" },
      ],
      insights: [
        {
          title: { de: "Kernfunktionen sind sofort verständlich", en: "Key functions are understood immediately" },
          text: {
            de: "Eine klare Darstellung des Medikationsplans erleichtert den Einstieg und erhöht die Akzeptanz.",
            en: "A clear presentation of the medication plan makes it easier to get started and increases acceptance.",
          },
        },
        {
          title: { de: "Das System muss sich an Routinen anpassen", en: "The system has to adapt to routines" },
          text: {
            de: "Die Testperson stellte den Dispenser anders hin als vorgesehen. Etablierte Abläufe dürfen nicht umgekrempelt werden.",
            en: "The participant placed the dispenser differently than intended. Established workflows should not be turned upside down.",
          },
        },
        {
          title: { de: "Jede Aktion braucht sichtbares Feedback", en: "Every action needs visible feedback" },
          text: {
            de: "Nach einer Anpassung war unklar, ob die Änderung gespeichert wurde.",
            en: "After an adjustment it was unclear whether the change had been saved.",
          },
        },
        {
          title: { de: "Fehlermeldungen brauchen einen nächsten Schritt", en: "Error messages need a next step" },
          text: {
            de: "Eine Meldung muss zeigen, welches Fach betroffen ist und was jetzt zu tun ist.",
            en: "A message has to show which compartment is affected and what to do now.",
          },
        },
      ],
      quote: {
        text: {
          de: "Und dann bräuchte theoretisch, denke ich – das ist nur meine Meinung –, niemand mehr weitere Kontrollen durchzuführen.",
          en: "And then, in theory, I think – that's just my opinion – nobody would need to carry out any further checks.",
        },
        source: { de: "Pflegekraft im Usability-Test (sinngemäß)", en: "Nurse in the usability test" },
      },
      images: [
        {
          src: "/img/cura/testing.webp",
          w: 1500,
          h: 2000,
          alt: {
            de: "Testaufbau mit Prototyp, Dispenser und Kamera auf einem Tisch",
            en: "Test set-up with prototype, dispenser and camera on a table",
          },
          caption: { de: "Aufbau des Usability-Tests.", en: "Usability test set-up." },
        },
        {
          src: "/img/cura/cover.webp",
          w: 1500,
          h: 2000,
          alt: {
            de: "Physischer Prototyp von cura mit Tablet und Wochen-Dispenser",
            en: "Physical cura prototype with tablet and weekly dispenser",
          },
          caption: { de: "Der physische Prototyp.", en: "The physical prototype." },
        },
      ],
    },
    {
      id: "ergebnis",
      nav: { de: "Ergebnis", en: "Result" },
      title: { de: "Alles an dem Ort, an dem befüllt wird", en: "Everything in the place where filling happens" },
      text: [
        {
          de: "Sobald ein Dispenser auf die Sensorfläche gestellt wird, erkennt cura die zugehörigen Bewohnerdaten und zeigt den aktuellen Medikationsplan. Änderungen durch Ärzt:innen werden aus der elektronischen Bewohnerakte synchronisiert – die Pflegefachkraft arbeitet immer mit dem aktuellen Stand.",
          en: "As soon as a dispenser is placed on the sensor surface, cura recognises the resident's data and shows the current medication plan. Changes made by doctors are synchronised from the electronic resident record – the nurse always works with the latest version.",
        },
        {
          de: "Während des Befüllens prüft die Kamera die eingelegten Tabletten. Fehlt eine, ist eine zu viel oder liegt sie im falschen Fach, erscheint sofort eine Meldung, die Schritt für Schritt durch die Korrektur führt. Der ständige Wechsel zwischen Papierplan, Laptop und Dispenser entfällt.",
          en: "During filling the camera checks the tablets. If one is missing, one too many, or in the wrong compartment, a message appears immediately and guides the nurse through the correction step by step. Switching back and forth between paper plan, laptop and dispenser is no longer necessary.",
        },
        {
          de: "Die Testerkenntnisse sind in das finale Design eingeflossen: eindeutige Rückmeldungen nach jeder Aktion und Fehlermeldungen mit klarer Handlungsanweisung.",
          en: "The test findings fed into the final design: unambiguous feedback after every action and error messages with a clear instruction.",
        },
      ],
      images: [
        {
          src: "/img/cura/screen-home.webp",
          w: 1194,
          h: 829,
          alt: { de: "cura-Startbildschirm mit Übersicht der Befüllprozesse", en: "cura home screen with an overview of filling processes" },
          caption: { de: "Start: Überblick über offene und erledigte Dispenser.", en: "Home: overview of open and completed dispensers." },
        },
        {
          src: "/img/cura/screen-fill.webp",
          w: 1194,
          h: 835,
          alt: { de: "Screen zum Befüllen mit Medikationsplan", en: "Filling screen with medication plan" },
          caption: { de: "Befüllen: der Medikationsplan führt Schritt für Schritt.", en: "Filling: the medication plan guides step by step." },
        },
        {
          src: "/img/cura/screen-error.webp",
          w: 1194,
          h: 829,
          alt: { de: "Fehlermeldung: falsches Fach erkannt", en: "Error message: wrong compartment detected" },
          caption: { de: "Fehler: betroffenes Fach, Ursache und nächster Schritt.", en: "Error: affected compartment, cause and next step." },
        },
        {
          src: "/img/cura/concept-ai.webp",
          w: 1536,
          h: 1024,
          alt: { de: "KI-generierte Visualisierung des Gerätekonzepts", en: "AI-generated visualisation of the device concept" },
          caption: {
            de: "Ausblick: KI-generierte Visualisierung eines möglichen Seriengeräts.",
            en: "Outlook: AI-generated visualisation of a possible production device.",
          },
        },
      ],
    },
  ],
  learnings: [
    {
      de: "Erst die Zielgruppe schärfen, dann Fragen formulieren – sonst bleiben How-Might-We-Fragen zu breit.",
      en: "Sharpen the target group first, then write the questions – otherwise how-might-we questions stay too broad.",
    },
    {
      de: "Vor Ort beobachten zeigt Dinge, die in Interviews niemand erwähnt.",
      en: "Observing on site reveals things nobody mentions in interviews.",
    },
    {
      de: "Ein System muss sich in bestehende Routinen einfügen, nicht umgekehrt.",
      en: "A system has to fit into existing routines, not the other way round.",
    },
  ],
  seoDescription: {
    de: "cura unterstützt Pflegekräfte beim Befüllen von Wochen-Dispensern und erkennt Fehler in Echtzeit. Research, Konzept, Interface und Usability-Test.",
    en: "cura supports nurses in filling weekly dispensers and detects errors in real time. Research, concept, interface and usability test.",
  },
};

export default project;
