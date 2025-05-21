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
      <section class="pl-[50px] mt-[50px] text-[24px] text-gray-800 leading-relaxed max-w-[800px]">
        <p>
          This project shows how digital technologies can be used specifically to support people with borderline personality disorder. 
          By combining reflection, biometric data and AI-supported support, we want to help those affected to better understand their emotions and deal with critical moments.
          <br><br>
          It was particularly important to us to develop an application that can be seamlessly integrated into everyday life and supports both the therapeutic process and personal well-being.
        </p>
      </section>

      <!-- PROCESS SECTION -->
      <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Process</h2>
        <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
          <p><span class="font-semibold">Recherche & Problemverständnis</span><br>
            Zu Beginn starteten wir mit einer offenen Themenfindung, in der wir uns fragten, welche Probleme aktuell bestehen und welche in Zukunft relevant werden könnten. Durch Ideensammlung entwickelten wir vielfältige Ansätze, bevor wir uns auf das Thema Borderline-Persönlichkeitsstörung (BPS) fokussierten...
          </p>
          <p><span class="font-semibold">Ideenentwicklung & Konzeption</span><br>
            Der kreative Prozess begann mit einer individuellen Ideenskizze, bei der jedes Teammitglied eigene Ansätze entwickelte...
          </p>
          <p><span class="font-semibold">Umsetzung & Prototyping</span><br>
            Mit einem klaren Konzept starteten wir in die visuelle und technische Umsetzung...
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
            Die Hauptfunktion der App ist die Reflexion...
          </p>
        </div>
      </section>

      <!-- FINAL SECTION -->
      <section class="mt-[50px] flex flex-col items-start text-[18px] pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Final</h2>
        <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
          <p><span class="font-semibold">App</span><br>
            The main function of the app is reflection...
          </p>
          <p><span class="font-semibold">Smartwatch</span><br>
            The smartwatch measures bio-metric data and recognises critical moments...
          </p>
          <p><span class="font-semibold">Tablet</span><br>
            Our app supports therapy by allowing users...
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
  font-family: Arial, sans-serif;
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
