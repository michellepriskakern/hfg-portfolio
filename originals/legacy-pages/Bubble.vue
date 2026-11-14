<template>
  <transition name="fade" appear>
    <div>
      <!-- HERO SECTION -->
      <section class="pt-[300px] pb-[50px] px-[50px]">
        <h1 class="text-[48px] font-bold" style="color: #D53C4F;">Bubble</h1>
        <p class="text-[24px]" style="color: #8C8C8B; margin-top: 2px;">Alltagsunterstützung für Borderline</p>
      </section>

      <!-- PROJECT INFO SECTION -->
      <section class="px-[50px] grid grid-cols-1 md:grid-cols-4 gap-10 text-[18px]">
        <div>
          <h2 class="text-[12px] font-semibold">[Duration]</h2>
          <p>Oktober 2024 - Januar 2025</p>
        </div>
        <div>
          <h2 class="text-[12px] font-semibold">[Team]</h2>
          <a href="https://yasminhaehnel.com" target="_blank" class="text-black-500 hover:underline">yasminhaehnel.com</a>, <br>
          <a href="https://leaullmann.de" target="_blank" class="text-black-500 hover:underline">Lea Ullmann</a>,<br>
          <a href="https://vanessahiller.de" target="_blank" class="text-black-500 hover:underline">Vanessa Hiller</a>
        </div>
        <div>
          <h2 class="text-[12px] font-semibold">[Tools]</h2>
          <p>Figma, Miro, Notion, Premiere, <br> After Effects</p>
        </div>
        <div>
          <h2 class="text-[12px] font-semibold">[Strategy]</h2>
          <p>Wireframes, Research, Concept</p>
        </div>
      </section>

      <!-- IMAGE SECTION -->
      <section class="mt-[50px] flex justify-center">
        <img src="/images/bubble.jpg" alt="Project Image" class="large-image rounded-lg shadow-md" />
      </section>

      <!-- DESCRIPTION SECTION -->
      <section class="pl-[50px] mt-[50px] text-[24px] text-gray-800 leading-relaxed max-w-[900px]">
        <p>
          Unser Projekt zeigt, wie digitale Technologien gezielt zur Unterstützung von Menschen mit Borderline-Persönlichkeitsstörung eingesetzt werden können.

Durch die Kombination von Reflexion, biometrischen Daten und KI-gestützter Unterstützung wollen wir den Betroffenen helfen, ihre Emotionen besser zu verstehen und mit kritischen Momenten umzugehen.

Dabei war es uns besonders wichtig, eine Anwendung zu entwickeln, die sich nahtlos in den Alltag integrieren lässt und sowohl den therapeutischen Prozess als auch das persönliche Wohlbefinden unterstützt.

        </p>
      </section>

      <!-- PROCESS SECTION -->
      <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Process</h2>
        <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
          <p><span class="font-semibold">Recherche & Problemverständnis</span><br>
            Zu Beginn starteten wir mit einer offenen Themenfindung, in der wir uns fragten, welche Probleme aktuell bestehen und welche in Zukunft relevant werden könnten. Durch Ideensammlung entwickelten wir vielfältige Ansätze, bevor wir uns auf das Thema Borderline-Persönlichkeitsstörung (BPS) fokussierten. Diese Entscheidung fiel, da es in diesem Bereich nur begrenzte Unterstützungsangebote gibt und wir hier großes Potenzial für sinnvolle Unterstützung sahen.

Um das Thema fundiert anzugehen, führten wir eine umfassende Recherche durch. Neben einer Marktrecherche, war uns klar, dass wir auch mit Expertinnen aus verscheidenen Bereichen reden möchten und auch in Austausch mit Betroffenen selbst sein wollten. Die gewonnenen Insights halfen uns, ein tiefes Verständnis für die Bedürfnisse und Herausforderungen der Zielgruppe zu entwickeln. Auf Basis dieser Erkenntnisse definierten wir unsere Ziele
          </p>
          <p><span class="font-semibold">Ideenentwicklung & Konzeption</span><br>
            Der kreative Prozess begann mit einer individuellen Ideenskizze, bei der jedes Teammitglied eigene Ansätze entwickelte. Im Rahmen der Methode „Crazy 8“ wurden in kurzer Zeit zahlreiche Ideen visualisiert. Anschließend bewerteten wir die Umsetzbarkeit der Ansätze, auch unter technologischen Gesichtspunkten.

Mit einer klaren Zielgruppenfokussierung erstellten wir eine Persona, die die Bedürfnisse und Eigenschaften der Nutzer*innen abbildet. Auf dieser Basis entwickelten wir den Userflow und die Informationsarchitektur der Funktionen. Weitere Skizzen und ein Storyboard veranschaulichten die Nutzerführung und das Nutzungserlebnis.
          </p>
          <p><span class="font-semibold">Umsetzung & Prototyping</span><br>
            Mit einem klaren Konzept starteten wir in die visuelle und technische Umsetzung. Ein Styleguide stellte sicher, dass ein einheitliches Bild über alle Komponenten hinweg gewahrt blieb. Parallel entwickelten wir Wireframes für die App und verfeinerten das Design sukzessive.

Der finale Prototyp entstand auf dieser Grundlage und wurde als klickbarer Dummy umgesetzt, um Nutzungsabläufe erlebbar zu machen. Ergänzend erstellten wir ein Video, für das wir ein detailliertes Skript verfassten. Die Aufnahme und der Schnitt des Videos dienten dazu, unser Konzept anschaulich zu präsentieren.
          </p>
        </div>
      </section>

      <!-- IMAGE SECTION FOR PROCESS -->
      <section class="mt-[52px] flex justify-center">
        <img src="public/images/bubble-process.png" alt="Process Image" class="large-image rounded-lg shadow-md" />
      </section>

      <!-- GIF AND TEXT SECTION -->
      <section class="mt-[50px] flex items-start justify-start px-[50px] gap-[50px] gif-section">
        <!-- GIF IMAGE -->
        <div class="flex-shrink-0">
          <img src="/images/bubble-gif.gif" alt="Bubble Animation" class="gif-image rounded-md" />
        </div>

        <!-- TEXT SECTION -->
        <div class="text-[18px] text-black leading-relaxed max-w-[500px]">
          <h2 class="text-[36px] font-semibold text-black mb-4">KI</h2>
          <p>
            Wir gehen davon aus, dass KI in Zukunft so weit fortgeschritten sein wird, dass sie – speziell mit Trainingsdaten aus dem therapeutischen Kontext – in der Lage ist, therapieunterstützend zu wirken. In unserer App bubble bildet die KI die zentrale Funktion: Sie begleitet die Nutzer*innen in Reflexionsprozessen, hilft dabei, erlebte Situationen besser einzuordnen, zu verstehen und mit ihnen umzugehen. So entsteht ein niedrigschwelliger, digitaler Raum für emotionale Selbstklärung und persönliche Weiterentwicklung.
          </p>
        </div>
      </section>

      <!-- FINAL SECTION -->
      <section class="mt-[50px] flex flex-col items-start text-[18px] pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Final</h2>
        <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
          <p><span class="font-semibold">App</span><br>
           
Die Hauptfunktion der App ist die Reflexion. Nutzer können Messdaten und kritische Momente einsehen und täglich eine KI-gestützte Reflexion mit „Bubble“ durchführen. Diese wird dokumentiert und kann später im Journal wieder eingesehen werden. Anonymisierte kritische Momente können zur besseren Reflexion wieder abgespielt werden.
          </p>
          <p><span class="font-semibold">Smartwatch</span><br>
     
Die Smartwatch misst bio-metrische Daten und erkennt kritische Momente. Steigen die Werte an, wird eine Benachrichtigung gesendet und Sie können den „Bitte nicht stören“-Modus nutzen, um die gespeicherten vertrauenswürdigen Personen in Ihrer Umgebung zu benachrichtigen.
          </p>
          <p><span class="font-semibold">Tablet</span><br>
           
Unsere App unterstützt die Therapie, indem die Nutzer im Therapiemodus selbst entscheiden können, welche Daten mit den Therapeuten geteilt werden. Sie sehen auf ihrem Tablet eine Übersicht über die relevanten Daten seit der letzten Sitzung. Die Anzeige kann über ein Whiteboard oder einen Beamer gut sichtbar gemacht werden. Nach der Therapie wird der Modus deaktiviert und die Daten können nur noch vom Nutzer selbst eingesehen werden.
          </p>
        </div>
      </section>

      <!-- IMAGE SECTION (App) -->
      <section class="mt-[50px] flex justify-center">
        <img src="/images/bubble-app.png" alt="Project Image" class="large-image rounded-lg shadow-md" />
      </section>

      <!-- IMAGE SECTION (smartwatch und tablet) -->
      <section class="mt-[50px] flex justify-center gap-6 max-w-[1428px] mx-auto">
        <img src="public/images/bubble-tablet.png" alt="Bild 1" class="square-image rounded-lg shadow-md" />
        <img src="public/images/bubble-smartwatch.png" alt="Bild 2" class="square-image rounded-lg shadow-md" />
      </section>

      <!-- VIDEO SECTION -->
      <section class="mt-[200px] mb-[200px] flex flex-col items-start pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-8 text-left">Video</h2>
        <div class="w-full max-w-[1428px] aspect-w-16 aspect-h-9">
          <iframe 
            width="1428" 
            height="803" 
            src="https://www.youtube.com/embed/JB0M_5JVKgQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </section>
      <Footer />
    </div>
  </transition>
</template>

<script setup>
</script>

<style scoped>
/* Fade-In Transition bei Seitenstart */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Globale Bildgröße für große Bilder */
.large-image {
  width: 100%;
  max-width: 1428px;
  height: auto;
  object-fit: cover;
}

.square-image {
  width: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  max-width: 714px;
}

/* GIF Bereich */
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

section h1 + p {
  margin-top: 2px !important;
}

body {
   font-family: 'Manrope', sans-serif;
}

.aspect-w-16 {
  width: 100%;
}

.aspect-h-9 {
  padding-top: 56.25%;
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
