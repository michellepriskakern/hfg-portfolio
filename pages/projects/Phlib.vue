<template>
  <div>
    <!-- HERO SECTION -->
    <section class="pt-[300px] pb-[50px] px-[50px]">
      <h1 class="text-[48px] font-bold" style="color: #D53C4F;">Phlib</h1>
      <p class="text-[24px]" style="color: #8C8C8B; margin-top: 2px;">Finde was du wirklich lesen willst</p>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="px-[50px] grid grid-cols-1 md:grid-cols-4 gap-10 text-[18px]">
      <div>
        <h2 class="text-[12px] font-semibold">[Duration]</h2>
        <p>Oktober 2024 – Januar 2025</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">[Team]</h2>
        <a href="https://vanessahiller.de" target="_blank" class="text-black-500 hover:underline">Vanessa Hiller</a>
        <p>Hope Sikuade</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">[Tools]</h2>
        <p>Figma, Miro, Notion, Premiere Pro,  <br> After Effects</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">[Strategy]</h2>
        <p>Research, Konzept, Prototyp, UI Design, Video Schnitt</p>
      </div>
    </section>

    <!-- IMAGE SECTION -->
    <section class="mt-[50px] flex justify-center">
      <img src="/images/phlib.png" alt="Project Image" class="large-image rounded-lg shadow-md" />
    </section>

    <!-- DESCRIPTION SECTION -->
    <section class="pl-[50px] mt-[50px] text-[24px] text-gray-800 leading-relaxed max-w-[800px]">
      <p>
        Unsere Idee: Eine App, die Schluss macht mit der endlosen Suche nach Büchern. Statt starrer Listen und allgemeiner Trends stellen wir uns eine Anwendung vor, die genau auf die persönlichen Vorlieben der Nutzer:innen zugeschnitten ist – und dabei auch mal überraschende Empfehlungen liefert, die aus der Komfortzone locken. Egal, ob man nach seinem nächsten Lieblingsbuch sucht oder einfach etwas Neues ausprobieren möchte – unser Konzept setzt auf Einfachheit, Schnelligkeit und Persönlichkeit.
      </p>
    </section>

    <!-- PROCESS SECTION -->
    <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
      <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Process</h2>
      <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
        <p><span class="font-semibold">Recherche & Problemverständnis</span><br>
          Um das Wertversprechen unserer App klar zu definieren, haben wir zunächst einen Value Proposition Canvas (VPC) erstellt. Dieser Prozess stellte uns vor einige Herausforderungen, die wir durch intensive Recherche und mehrere Anläufe erfolgreich überwinden konnten.
          Ein zentraler Fokus unserer Recherche lag darauf, das Problem bestehender Bücher-Apps zu verstehen. Trotz der Vielzahl an Anwendungen auf dem Markt gibt es keine, die Nutzer:innen wirklich zuverlässig zu ihren nächsten Lieblingsbüchern führt. Oft sind Empfehlungen zu allgemein, zu trendorientiert oder nicht auf die persönlichen Vorlieben zugeschnitten.
          Um diese Schwächen zu identifizieren und zu verstehen, führten wir eine umfassende Nutzerforschung durch. Dazu gehörten eine Umfrage, die wir an unsere Zielgruppe weitergaben, sowie ergänzende Interviews, um tiefere Einblicke in Lesegewohnheiten, Motivation und Nutzung bestehender Apps zu erhalten. Ergänzt wurde dieser Prozess durch Desk Research und eine detaillierte Konkurrenzanalyse. Die gewonnenen Erkenntnisse bildeten die Grundlage für unsere Zieldefinition: Eine App, die das Finden von Büchern vereinfacht und durch personalisierte Empfehlungen genau auf die Vorlieben der Nutzer:innen abgestimmt ist.      </p>
        <p><span class="font-semibold">Ideenentwicklung & Konzeption</span><br>
          Auf Basis der Recherche entwickelten wir erste Ideen, die wir in konkrete Lösungsansätze überführten. Zunächst formulierten wir How-Might-We-Fragen, die uns halfen, unser Konzept zielgerichtet weiterzuentwickeln. Daraufhin erstellten wir drei Personas, die unsere Zielgruppe der Gen Z repräsentieren, und entwickelten User Flows, die den idealen Nutzungspfad unserer App abbilden.
          Um eine klare Struktur und Navigation zu gewährleisten, entwarfen wir eine Informationsarchitektur und skizzierten erste Wireframes. Diese entwickelten wir weiter zu einem Wireflow, der die Benutzerführung visualisiert. Ein Moodboard half uns, einen einheitlichen Stil zu definieren, der später im Styleguide festgehalten wurde.    </p>
        <p><span class="font-semibold">Umsetzung & Prototyping</span><br>
          Mit einem soliden Konzept und einem klaren visuellen Stil starteten wir in die Umsetzung. Zunächst entwickelten wir Mid-Fidelity Wireframes, die den funktionalen Aufbau der App zeigten. Diese verfeinerten wir zu High-Fidelity-Screens, die unser finales Design repräsentieren.
          Anschließend erstellten wir einen interaktiven Prototypen (Klickdummy), der die Nutzung unserer App erlebbar machte. Ergänzend entwickelten wir ein Storyboard und ein Video, um unser Konzept anschaulich zu präsentieren. Als zusätzliche Erweiterung konzipierten wir außerdem eine Web-Anwendung, die das App-Erlebnis abrundet.
        </p>
      </div>
    </section>

  <!-- IMAGE SECTION FOR PROCESS -->
    <section class="mt-[52px] flex justify-center">
      <img src="public/images/phlib-persona.png" alt="Process Image" class="large-image rounded-lg shadow-md" />
    </section>



    <!-- FINAL SECTION -->
    <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
      <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Final</h2>
      <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
        <p><span class="font-semibold">App</span><br>
          Phlib bietet eine Reihe von Funktionen, die das Entdecken und Lesen von Büchern einfacher, persönlicher und sozialer machen. Die App verbindet auf smarte Weise persönliche Empfehlungen mit praktischen Tools, damit jede:r schnell das passende Buch findet und das Lesen gemeinsam genießen kann.
          Entdecken-Seite: Jeden Tag neue Inspiration mit wechselndem Match des Tages, individuellen Listen wie Top-Bücher der Woche und Empfehlungen von Freund:innen.
          BookMatch: Die schnellste Art, neue Bücher zu finden. Nutzer:innen entscheiden durch Swipen sofort, ob ein Buch interessant klingt. Anpassbare Filter sorgen für eine schnelle und zielgerichtete Suche.
          Lesefortschritt & Bibliothek: Bücher in persönlichen Leselisten organisieren, den Lesefortschritt aktualisieren und jederzeit den Überblick behalten.
          Buddyreads: Gemeinsam lesen und sich austauschen. Fortschritt der Freund:innen im Blick behalten und direkt in der App miteinander interagieren.
          Social Feed: Entdecken, was Freund:innen gerade lesen, Leseupdates kommentieren und durch Lese-Stories stöbern.
          Lesestatistik & Challenges: Persönliche Leseziele setzen, Streaks verfolgen und Jahres-Challenges meistern.     </p>
        <p><span class="font-semibold">Website</span><br>
          Die Web-Ansicht von Phlib bietet dieselben Kernfunktionen wie die App – in einem auf größere Bildschirme optimierten Layout. Nutzer:innen können ihre Bibliothek verwalten, BookMatch nutzen, Buchempfehlungen entdecken und Buddyreads verfolgen. Damit wird Phlib zur plattformübergreifenden Lösung für alle, die ihre Leseerfahrung flexibel gestalten möchten.   </p>
       
      </div>
    </section>


    <!-- IMAGE SECTION (App) -->
    <section class="mt-[50px] flex justify-center">
      <img src="/images/Entdecken.jpg" alt="Project Image" class="large-image rounded-lg shadow-md" />
    </section>
  </div>

   <!-- IMAGE SECTION (smartwatch und tablet) -->
  <section class="mt-[50px] flex justify-center gap-6 max-w-[1428px] mx-auto">
  <img src="public/images/phlib-website.png" alt="Bild 1" class="square-image rounded-lg shadow-md" />
  <img src="public/images/phlib-logo.gif" alt="Animiertes GIF" class="square-image rounded-lg shadow-md" />

</section>

<section class="mt-[200px] mb-[200px] flex flex-col items-start pl-[50px]">
  <h2 class="text-[48px] font-bold leading-[1.0] mb-8 text-left">Video</h2>
  <div class="w-full max-w-[1428px] aspect-w-16 aspect-h-9">
    <iframe 
      width="1428" 
      height="803" 
      src="https://www.youtube.com/embed/3Qm4kqPUMQ0" 
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
 