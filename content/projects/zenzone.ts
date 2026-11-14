import type { Project } from "../types";

const project: Project = {
  slug: "zenzone",
  published: true,
  order: 2024.1,
  title: "zenzone",
  subtitle: { de: "Entspannung im Alltag", en: "Relaxation in everyday life" },
  year: "2024",
  duration: { de: "März – Juli 2024", en: "March – July 2024" },
  context: {
    de: "Interface Design 1 · 2. Semester · Felix Cordes",
    en: "Interface Design 1 · 2nd semester · Felix Cordes",
  },
  team: [
    { name: "Yasmin Hähnel", url: "https://yasminhaehnel.com" },
    { name: "Lea Ullmann", url: "https://leaullmann.de" },
  ],
  tools: ["Figma", "Miro", "Cinema 4D", "Blender", "Arduino", "Premiere Pro"],
  focus: [
    { de: "Research", en: "Research" },
    { de: "Konzept", en: "Concept" },
    { de: "Prototyping", en: "Prototyping" },
    { de: "Usability Testing", en: "Usability testing" },
    { de: "3D-Druck", en: "3D printing" },
  ],
  disciplines: { de: "Haptic UI · Hardware · App", en: "Haptic UI · Hardware · App" },
  cover: {
    src: "/img/zenzone/cover.webp",
    w: 2000,
    h: 1334,
    alt: {
      de: "Die zenzone-Box mit leuchtendem Stein auf einem Holztisch",
      en: "The zenzone box with a glowing stone on a wooden table",
    },
  },
  hero: {
    src: "/img/zenzone/cover.webp",
    w: 2000,
    h: 1334,
    alt: {
      de: "Die zenzone-Box mit leuchtendem Stein auf einem Holztisch",
      en: "The zenzone box with a glowing stone on a wooden table",
    },
  },
  summary: {
    de: "zenzone ist eine Klangbox für den Nachttisch, die sich ganz ohne Bildschirm bedienen lässt. Wer einen der drei Steine auflegt, startet Licht und Klang zum Einschlafen, Meditieren oder für den eigenen Modus – das Smartphone bleibt außer Reichweite.",
    en: "zenzone is a sound box for the bedside table that works entirely without a screen. Placing one of three stones on it starts light and sound for falling asleep, meditating or a personal mode – the smartphone stays out of reach.",
  },
  challenge: {
    de: "Wie können wir das Einschlafen und Meditieren mit Klängen erleichtern – mit einer Bedienung, die im Dunkeln funktioniert und selbst Teil der Entspannung ist?",
    en: "How might we make falling asleep and meditating with sound easier – with controls that work in the dark and are themselves part of relaxing?",
  },
  chapters: [
    {
      id: "ausgangslage",
      nav: { de: "Ausgangslage", en: "Starting point" },
      title: { de: "Haptik statt Touchscreen", en: "Haptics instead of touchscreens" },
      text: [
        {
          de: "Das Semesterthema war Haptic User Interfaces im Alltag. Immer mehr haptische Bedienelemente werden durch Touchscreens ersetzt – oft auf Kosten der Barrierefreiheit.",
          en: "The semester topic was haptic user interfaces in everyday life. More and more physical controls are being replaced by touchscreens – often at the expense of accessibility.",
        },
        {
          de: "Bei der Ideensammlung fiel uns auf, dass wir alle drei Lautsprecher notiert hatten – und dasselbe Problem teilen: Zum Einschlafen brauchen wir das Handy für Hintergrundgeräusche. Genau dort steht es der Ruhe im Weg: Nachrichten, grelles Licht, der Griff zu Social Media.",
          en: "While collecting ideas we noticed that all three of us had written down speakers – and that we share the same problem: we need our phones for background noise to fall asleep. That is exactly where it gets in the way of rest: messages, bright light, reaching for social media.",
        },
      ],
      methods: [
        { de: "Ideensammlung", en: "Idea collection" },
        { de: "Desk Research", en: "Desk research" },
        { de: "Interviews", en: "Interviews" },
      ],
      insights: [
        {
          title: { de: "Das Handy liegt griffbereit", en: "The phone is within reach" },
          text: {
            de: "„Nicht stören“ und Schlaf-Timer helfen wenig, solange das Gerät neben dem Bett liegt.",
            en: "Do-not-disturb and sleep timers help little as long as the device lies next to the bed.",
          },
        },
        {
          title: { de: "Stille ist für viele keine Option", en: "Silence is not an option for many" },
          text: {
            de: "Viele Befragte können ohne Hintergrundgeräusche nur schwer einschlafen.",
            en: "Many of the people we asked find it hard to fall asleep without background noise.",
          },
        },
      ],
    },
    {
      id: "ideen",
      nav: { de: "Ideenfindung", en: "Ideation" },
      title: { de: "Ein gemeinsames Ziel finden", en: "Finding a shared goal" },
      text: [
        {
          de: "Ein Moodboard, ein Long-Term-Goal mit How-Might-We-Fragen und klar benannte Nutzergruppen gaben die Richtung vor. Danach skizzierte jede von uns unabhängig – auch mit der Crazy-8-Methode – und wir hielten fest, was uns an den Entwürfen der anderen gefiel.",
          en: "A mood board, a long-term goal with how-might-we questions and clearly defined user groups set the direction. Then each of us sketched independently – also using the crazy 8 method – and we noted what we liked about each other's designs.",
        },
        {
          de: "Eine Focus Area ordnete alles nach Funktionen, Formgebung, Materialien und Bedienelementen und machte die Prioritäten auf einen Blick sichtbar: Entspannung, Licht, Musik.",
          en: "A focus area sorted everything by functions, form, materials and controls and made the priorities visible at a glance: relaxation, light, music.",
        },
      ],
      methods: [
        { de: "Moodboard", en: "Mood board" },
        { de: "Long-Term-Goal", en: "Long-term goal" },
        { de: "How Might We", en: "How might we" },
        { de: "Crazy 8", en: "Crazy 8" },
        { de: "Focus Area", en: "Focus area" },
      ],
    },
    {
      id: "konzept",
      nav: { de: "Konzept", en: "Concept" },
      title: { de: "Ein Stein als Schalter", en: "A stone as a switch" },
      text: [
        {
          de: "Unsere drei besten Ideen bauten wir als Papierprototypen, um zu prüfen, wie die Bedienelemente in der Hand liegen. Daraus kristallisierte sich das Prinzip heraus: ein größerer Stein startet den Modus, zwei kleine Kugeln regeln Lautstärke und Licht.",
          en: "We built our three best ideas as paper prototypes to check how the controls feel in the hand. The principle emerged from this: a larger stone starts the mode, two small balls control volume and light.",
        },
        {
          de: "Weil Einschlafen und Meditieren unterschiedliche Bedürfnisse sind, gibt es mehrere Steine mit eigener haptischer Oberfläche. Den Bedienablauf hielten wir in Flussdiagrammen fest – in mehreren Versionen, weil Pausieren und Skippen zunächst offen waren.",
          en: "Because falling asleep and meditating are different needs, there are several stones, each with its own tactile surface. We recorded the interaction flow in flow charts – in several versions, because pausing and skipping were still open at first.",
        },
      ],
      methods: [
        { de: "Papierprototypen", en: "Paper prototypes" },
        { de: "Skizzen", en: "Sketches" },
        { de: "Flussdiagramm", en: "Flow chart" },
      ],
    },
    {
      id: "prototyp",
      nav: { de: "Prototyp", en: "Prototype" },
      title: { de: "Von Styropor zu Arduino", en: "From styrofoam to Arduino" },
      text: [
        {
          de: "Den Low-Fi-Prototyp formten wir aus einer Styroporkugel und Modelliermasse, die Regler waren Holzperlen. Mit Blender und Photoshop visualisierten wir das Erscheinungsbild für die Zwischenpräsentation.",
          en: "We shaped the low-fi prototype from a styrofoam ball and modelling clay; the controls were wooden beads. With Blender and Photoshop we visualised the appearance for the interim presentation.",
        },
        {
          de: "Für die Tests bauten wir einen funktionsfähigen Prototyp mit Arduino und Neopixel-Ring, um Licht nach dem Wizard-of-Oz-Prinzip zu simulieren. Parallel entstand die App, mit der Playlists per NFC auf einen Stein übertragen werden.",
          en: "For the tests we built a working prototype with an Arduino and a Neopixel ring to simulate light using the Wizard of Oz method. In parallel we designed the app, which transfers playlists to a stone via NFC.",
        },
      ],
      methods: [
        { de: "Low-Fi-Prototyp", en: "Low-fi prototype" },
        { de: "3D-Visualisierung", en: "3D visualisation" },
        { de: "Arduino", en: "Arduino" },
        { de: "Wizard of Oz", en: "Wizard of Oz" },
      ],
      images: [
        {
          src: "/img/zenzone/render.webp",
          w: 2000,
          h: 1268,
          alt: { de: "3D-Visualisierung der zenzone-Box", en: "3D visualisation of the zenzone box" },
          caption: { de: "3D-Visualisierung des Konzepts.", en: "3D visualisation of the concept." },
        },
      ],
    },
    {
      id: "testing",
      nav: { de: "Testing", en: "Testing" },
      title: { de: "Sechs Tests, klare Antworten", en: "Six tests, clear answers" },
      text: [
        {
          de: "Vor den Tests definierten wir Benutzergruppen, Anwendungskontext und Ziele. Mit sechs Personen testeten wir die Bedienung der Box und der App. Die Insights bestätigten Teile des Konzepts – und führten bei Pausieren und Skippen zum Umdenken: Statt den Stein anzuheben, wird er nun angetippt.",
          en: "Before testing we defined user groups, context of use and goals. We tested the operation of the box and the app with six people. The insights confirmed parts of the concept – and made us rethink pausing and skipping: instead of lifting the stone, users now tap it.",
        },
      ],
      methods: [
        { de: "6 Usability-Tests", en: "6 usability tests" },
        { de: "Testleitfaden", en: "Test guide" },
        { de: "Beobachtung", en: "Observation" },
      ],
      images: [
        {
          src: "/img/zenzone/testing.webp",
          w: 2000,
          h: 1127,
          alt: { de: "Testpersonen bedienen den Prototyp", en: "Participants operating the prototype" },
          caption: { de: "Usability-Tests mit dem funktionsfähigen Prototyp.", en: "Usability tests with the working prototype." },
        },
      ],
    },
    {
      id: "ergebnis",
      nav: { de: "Ergebnis", en: "Result" },
      title: { de: "Auflegen, antippen, abschalten", en: "Place, tap, switch off" },
      text: [
        {
          de: "Box: Wird ein Stein aufgelegt, starten Licht und Klang. Einmal antippen pausiert, doppelt antippen springt zum nächsten Titel. Wird der Stein abgenommen, schaltet sich die Box aus.",
          en: "Box: placing a stone on it starts light and sound. One tap pauses, a double tap skips to the next track. Removing the stone switches the box off.",
        },
        {
          de: "Steine: Drei Steine stehen für drei Modi und sind an ihrer Oberfläche zu ertasten – Einschlafen, Meditieren (das Licht pulsiert im Rhythmus der Atemübung) und Dein Modus für Hörspiele, Podcasts oder Musik.",
          en: "Stones: three stones stand for three modes and can be told apart by touch – falling asleep, meditating (the light pulses in the rhythm of the breathing exercise) and your mode for audio plays, podcasts or music.",
        },
        {
          de: "App: Sie wird nur zur Einrichtung gebraucht. Playlists, Lichttemperatur und die Zeit bis zum Standby werden festgelegt und per NFC auf den Stein übertragen.",
          en: "App: it is only needed for set-up. Playlists, light temperature and the time until standby are defined and transferred to the stone via NFC.",
        },
      ],
      images: [
        {
          src: "/img/zenzone/bed.webp",
          w: 1920,
          h: 1080,
          alt: { de: "zenzone auf einem Nachttisch neben dem Bett", en: "zenzone on a bedside table next to the bed" },
          caption: { de: "zenzone auf dem Nachttisch.", en: "zenzone on the bedside table." },
        },
        {
          src: "/img/zenzone/stones.webp",
          w: 2000,
          h: 1428,
          alt: { de: "Drei Steine mit unterschiedlichen Oberflächen", en: "Three stones with different surfaces" },
          caption: { de: "Drei Steine, drei Modi.", en: "Three stones, three modes." },
        },
        {
          src: "/img/zenzone/app.webp",
          w: 2000,
          h: 1428,
          alt: { de: "Die zenzone-App auf einem Smartphone", en: "The zenzone app on a smartphone" },
          caption: { de: "Die App zur Einrichtung.", en: "The set-up app." },
        },
      ],
    },
  ],
  youtubeId: "PNB309KE4Jc",
  seoDescription: {
    de: "zenzone ist eine Klangbox mit haptischem Interface: Steine auflegen statt Bildschirm. Konzept, Prototyping mit Arduino und Usability-Tests.",
    en: "zenzone is a sound box with a haptic interface: place stones instead of using a screen. Concept, prototyping with Arduino and usability tests.",
  },
};

export default project;
