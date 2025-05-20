<template>
  <div>
    <!-- HERO SECTION -->
    <section class="pt-[300px] pb-[50px] px-[50px]">
      <h1 class="text-[48px] font-bold" style="color: #D53C4F;">The human head</h1>
      <p class="text-[24px]" style="color: #8C8C8B; margin-top: 2px;">Interaktive Austellungsgestaltung</p>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="px-[50px] grid grid-cols-1 md:grid-cols-4 gap-10 text-[18px]">
      <div>
        <h2 class="text-[12px] font-semibold">[Duration]</h2>
        <p>März 2024 – Juli 2024</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">[Team]</h2>
        <a href="https://leaullmann.de" target="_blank" class="text-black-500 hover:underline">Lea Ullmann</a>,<br>
        <a href="https://vanessahiller.de" target="_blank" class="text-black-500 hover:underline">Vanessa Hiller</a>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">[Tools]</h2>
        <p>Miro, Figma, Cinema 4D, Premiere Pro, Arduino</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">[Strategy]</h2>
        <p>Research, Konzept, Prototyp, Screen Design, Animationen, Video Schnitt</p>
      </div>
    </section>

    <!-- IMAGE SECTION -->
    <section class="mt-[50px] flex justify-center">
      <img src="/images/humanhead.png" alt="Project Image" class="large-image rounded-lg shadow-md" />
    </section>

    <!-- DESCRIPTION SECTION -->
    <section class="pl-[50px] mt-[50px] text-[24px] text-gray-800 leading-relaxed max-w-[800px]">
      <p>
        Im Rahmen einer fiktiven interaktiven Ausstellung haben wir eine Installation zum Thema der menschliche Kopf gestaltet. Die wichtigsten Fakten und Funktionen des menschlichen Kopfes sollen in einer einfachen und spielerischen Weise vermittelt werden.
      </p>
    </section>

    <!-- PROCESS SECTION -->
    <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
      <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Process</h2>
      <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
        <p><span class="font-semibold">Recherche & Problemverständnis</span><br>
        Das Thema „menschlicher Kopf“ wurde uns zufällig zugeteilt. Anschließend führten wir eine erste Recherche durch und sammelten Inspirationsmaterial in einem Moodboard mit Ausstellungsbeispielen. Um das Thema besser zu verstehen und einzugrenzen, erstellten wir eine Mindmap. Dabei überlegten wir zunächst, uns auf die Sinnesorgane zu spezialisieren, verwarfen diese Idee jedoch nach einem 3D-Scan eines bestehenden Modells, da sie zu wenig Spielraum für neue Inhalte bot. Stattdessen entschieden wir uns für eine Gliederung in Gehirn, Mundbereich, Nasenbereich, Rachen und Rückenmark – mit dem Ziel, interessante und weniger bekannte Informationen zu vermitteln.

Wir definierten eine Zielgruppe, um Inhalte verständlich und zielgerichtet aufzubereiten, und legten ein inhaltliches Konzept mit Inhaltsverzeichnis, Flowchart sowie Quizfragen und Antwortmöglichkeiten an. So erhielten wir eine klare Struktur für die Informationsvermittlung.  </p>
        <p><span class="font-semibold">Ideenentwicklung & Konzeption</span><br>
          Jede*r entwickelte erste Skizzen zur Umsetzungsidee. Gemeinsam entschieden wir uns schließlich für ein interaktives Puzzle, das den Kopf in einzelne Bereiche unterteilt, um Informationen schrittweise und spielerisch zu vermitteln. Der Spielcharakter war uns dabei besonders wichtig.

Wir erstellten ein Interface-Moodboard und leiteten daraus unseren Styleguide ab. Anschließend gestalteten wir erste Interface-Varianten in Figma und entwickelten einen Paper-Prototypen. Dieser diente dazu, die Anordnung der Elemente sowie den Informationsfluss zu testen. Der Kopf wurde zentral platziert, Buttons und Puzzle-Elemente gut erreichbar angeordnet. Das frühe Testen half uns, Probleme frühzeitig zu erkennen und fundierte Layoutentscheidungen zu treffen.  </p>
        <p><span class="font-semibold">Umsetzung & Prototyping</span><br>
          Für das physische Modell fertigten wir ein Holzpuzzle an, das wir mit Laser schnitten. Die Puzzleteile bestehen aus zwei Holzplatten und enthalten eingelassene Magnete. Für bessere Haptik haben wir Tabs hinzugefügt. Die Technik wurde auf der Rückseite durch einen Holzrahmen, weiße Pappe und Polystyrol gestützt. Zwei Arduino-Boards steuern die Interaktionen: Eines erkennt durch Reed-Kontakte und Magnete die richtigen Puzzleteile, das andere registriert die Berührung der Antwort-Buttons über Kupferklebeband.

Im digitalen Prototypen wurden Nummern für die Interaktionen vergeben, um die Verbindung zur physischen Technik herzustellen. Texte und Grafiken erscheinen zeitlich versetzt, um den Informationsfluss zu steuern. Am Ende erstellten wir alle restlichen Puzzleteile und setzten das finale Layout um. Die Quizfunktion ist voll funktionsfähig – durch Handberührung auf die Kupferflächen werden Buttons aktiviert.

Wir sind mit dem Ergebnis sehr zufrieden, auch wenn technische Herausforderungen und gestalterische Entscheidungen uns zeitweise gefordert haben. Durch gute Teamarbeit konnten wir alle Probleme lösen. Besonders hilfreich war das frühe Prototyping, das uns viele Erkenntnisse brachte. Mit mehr Zeit würden wir noch Audiofeedback integrieren und das Projekt mehrsprachig erweitern.
        </p>
      </div>
    </section>

     <!-- IMAGE SECTION FOR PROCESS -->
    <section class="mt-[52px] flex justify-center">
      <img src="public/images/humanhead-prozess.png" alt="Process Image" class="large-image rounded-lg shadow-md" />
    </section>



    <!-- FINAL SECTION -->
    <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
      <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Final</h2>
      <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
        <p><span class="font-semibold">Platzierung -Einstiegsfrage</span><br>
          Die Puzzleteile stehen für unterschiedliche Teile des menschlichen Kopfes. Jedes Puzzleteil steht für ein Kapitel. Sobald das Quiz gestartet wird, gibt es eine Einführungsfrage, bei der das passende Puzzleteil – welches die Antwort auf die Frage bildet, an die richtige Stelle platziert werden muss. Ist die Position und das Puzzleteil korrekt, beginnt das jeweilige Kapitel.   </p>
        <p><span class="font-semibold">Informationsebene -Informationsscreen</span><br>
          Zu Beginn jedes Kapitels vermittelt ein Informationsscreen grundlegende Fakten zum jeweiligen Bereich des Kopfes. In den Inhalten sind bereits Hinweise auf die anschließenden Quizfragen integriert.  </p>
        <p><span class="font-semibold">Vertiefungsebene -Quiz</span><br>
          Die Quizfragen bestehen jeweils aus drei Antwortmöglichkeiten. Nach Auswahl einer Option wird durch eine farbliche Markierung angezeigt, ob die Antwort korrekt oder falsch ist. Sobald beide Fragen eines Kapitels beantwortet wurden, kann mit dem nächsten Kapitel fortgefahren werden. </p>
      </div>
    </section>


    <!-- IMAGE SECTION (einstiegsfrage) -->
    <section class="mt-[50px] flex justify-center">
      <img src="/images/Einstiegsfrage.jpg" alt="Project Image" class="large-image rounded-lg shadow-md" />
    </section>
  </div>

   <!-- IMAGE SECTION (smartwatch und tablet) -->
  <section class="mt-[50px] flex justify-center gap-6 max-w-[1428px] mx-auto">
  <img src="public/images/ErgebnisQuizfrage.png" alt="Bild 1" class="square-image rounded-lg shadow-md" />
  <img src="public/images/ErgebnisInfoScreen.png" alt="Bild 2" class="square-image rounded-lg shadow-md" />

</section>

<section class="mt-[200px] mb-[200px] flex flex-col items-start pl-[50px]">
  <h2 class="text-[48px] font-bold leading-[1.0] mb-8 text-left">Video</h2>
  <div class="w-full max-w-[1428px] aspect-w-16 aspect-h-9">
    <iframe 
      width="1428" 
      height="803" 
      src="https://www.youtube.com/embed/s7mhUZMfUJM" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
</section>






</template>

<script setup>
</script>


<style scoped>
/* Globale Bildgröße für große Bilder */
.large-image {
  width: 100%;
  max-width: 1428px;
  height: auto;
  object-fit: cover;
}

.square-image {
  width: 50%;         /* Jeweils die Hälfte vom Container */
  aspect-ratio: 1 / 1; /* Macht das Bild quadratisch */
  object-fit: cover;   /* Bild skaliert, füllt den Container */
  max-width: 714px;    /* Damit sie nicht breiter als 714px werden */
}

/* GIF Bereich speziell ansprechen */
.gif-section {
  display: flex;
  align-items: center;
  gap: 50px;
}

.gif-section .gif-image {
  width: 800px;
  height: 800px;
  object-fit: contain;
}

/* Prozess Textbereich */
.process-text p {
  max-width: 50ch;
  word-wrap: break-word;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 12px;
}

/* Textanpassung für den Hero-Bereich */
section h1 + p {
  margin-top: 2px !important;
}


body {
  font-family: Arial, sans-serif;
}

.aspect-w-16 {
  width: 100%;
}

.aspect-h-9 {
  padding-top: 56.25%; /* Verhältnis 16:9 für das Video */
  position: relative;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
 