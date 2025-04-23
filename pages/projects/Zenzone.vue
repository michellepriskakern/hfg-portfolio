<template>
  <div>
    <!-- HERO SECTION -->
    <section class="relative w-full h-screen bg-cover bg-center flex items-end text-black"
      :style="{ backgroundImage: 'url(/images/zenzone.png)' }">
      <div class="absolute bottom-10 left-10">
        <h1 class="text-6xl font-bold">zenzone</h1>
        <p class="text-2xl mt-2">Entspannung im Alltag</p>
      </div>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="text-xl">
        <p><span class="text-gray-400 font-semibold">Duration</span><br>1 semester, study project</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Strategy</span><br>Research, Interviews, Concept, interaction,<br>video conception, digital application, UI Design</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Tools</span><br>Figma, Cinema4D, Miro, </p>
        <br>
        <p>
  <span class="text-gray-400 font-semibold">Team</span><br>
  <a href="https://yasminhaehnel.com" target="_blank" class="text-black-500 hover:underline">yasminhaehnel.com</a>, 
  <a href="https://leaullmann.de" target="_blank" class="text-black-500 hover:underline">Lea Ullmann</a>
</p>
      </div>
      <div>
        <p class="text-4xl font-semibold">
          Unser Semesterprojekt im Kurs Interface Design 1 beschäftigte sich mit dem Thema Haptic User Interfaces im Alltag. Ziel war es, ein Gerät zu entwerfen, das sich über ein haptisches Interface bedienen lässt.

In vielen Bereichen des Alltags werden haptische Rückmeldungen zunehmend durch Touchscreens ersetzt – was jedoch häufig zu Einschränkungen in der Barrierefreiheit führt. Unser Projekt setzte genau hier an und suchte nach alternativen, taktil erfahrbaren Bedienkonzepten.
        </p>
      </div>
    </section>

    <!-- KONZEPT SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div></div>
      <div>
        <h2 class="text-3xl font-bold mb-4">Concept</h2>
        <p class="text-lg leading-relaxed">
          Das Smartphone ist für viele zum ständigen Begleiter geworden – auch abends im Bett. Doch genau dort steht es echter Entspannung oft im Weg. Eingehende Nachrichten, grelles Licht oder der Impuls, noch einmal schnell auf Social Media zu schauen, stören den Einschlafprozess und führen zu innerer Unruhe.
<br><br>
          Dabei ist es gerade abends wichtig, den Kopf freizubekommen und den Tag hinter sich zu lassen. Das Handy ist zwar ein praktisches Tool, um den Alltag zu organisieren, doch es kann auch zur Ablenkung werden. Viele Menschen haben Schwierigkeiten, abends abzuschalten und zur Ruhe zu kommen. Das Smartphone wird oft als letzte Beschäftigung genutzt, bevor
Zwar gibt es Funktionen wie den „Nicht stören“-Modus oder Schlaf-Timer in Apps, doch das Problem bleibt: Das Handy liegt griffbereit – und damit auch die Ablenkung. Viele nutzen zudem YouTube, Spotify oder andere Plattformen, um mit Musik, Geräuschen oder Hörspielen einzuschlafen. Doch Werbung, Bildschirmlicht oder ständige Verfügbarkeit stören die eigentlich gewünschte Ruhe.
<br><br>
zenzone wurde entwickelt, um genau hier anzusetzen: ein eigenständiges Gerät, das beruhigende Klänge abspielt – ganz ohne aktives Smartphone. Es schafft eine ablenkungsfreie Atmosphäre für echte Entspannung und unterstützt so einen natürlichen Einschlafprozess.
        </p>
      </div>
    </section>

<!-- CONTENT SECTIONS -->
<section class="container mx-auto px-8 py-16">
  <div class="space-y-[150px]">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <div v-if="index % 2 === 0">
        <h2 class="text-3xl font-bold">{{ section.title }}</h2>
        <p class="mt-4 text-lg">{{ section.text }}</p>
      </div>
      <div>
        <img :src="section.image" :alt="section.title" class="rounded-lg shadow-md" />
      </div>
      <div v-if="index % 2 !== 0">
        <h2 class="text-3xl font-bold">{{ section.title }}</h2>
        <p class="mt-4 text-lg">{{ section.text }}</p>
      </div>
    </div>
  </div>
</section>

    <!-- 🔄 Figma + YouTube Video Carousel Section -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-8 text-center">Prototyp & Video</h2>
      <div class="relative max-w-[1200px] mx-auto w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <transition name="fade" mode="out-in">
          <div :key="currentSlide" class="w-full h-full">
            <iframe
              v-if="currentSlide === 0"
              class="w-full h-full"
              style="border: 0;"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/pbKNn9V1Rvx6Qoy723xZOL/Application-Design?page-id=917%3A996&node-id=917-1098&viewport=1012%2C-900%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=917%3A1098"
              allowfullscreen
            ></iframe>
            <iframe
              v-else
              class="w-full h-full"
              style="border: 0;"
              src="https://www.youtube.com/embed/hPr-Yc92qaY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </transition>

        <!-- Controls -->
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            @click="prevSlide"
            class="bg-white/80 hover:bg-white text-black font-bold p-3 rounded-r-lg shadow-md"
          >
            ‹
          </button>
        </div>
        <div class="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            @click="nextSlide"
            class="bg-white/80 hover:bg-white text-black font-bold p-3 rounded-l-lg shadow-md"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)
const totalSlides = 2

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

const sections = [
  {
    title: "App",
    text: "Eine der Hauptfunktionen ist die Entdecken-Seite mit täglich wechselndem Match des Tages, individuellen Listen wie Top-Bücher der Woche oder Empfehlungen von Freunden und dem innovativen BookMatch-Feature. Dieses funktioniert ähnlich wie Tinder – Nutzer:innen entscheiden auf einen Blick, ob sie ein Buch interessiert oder nicht. Durch anpassbare Filter bietet BookMatch eine besonders schnelle und einfache Möglichkeit, neue Literatur zu finden. Zusätzlich ermöglicht Phlib das gemeinsame Lesen durch Buddyreads, das Teilen von Leseupdates im Feed und eine persönliche Lesestatistik mit Streaks und Jahres-Challenges. Visuell ansprechend und intuitiv gestaltet, bringt Phlib Übersicht, Motivation und Inspiration in den Lesealltag.",
    image: "/images/Entdecken.jpg"
  },
  {
    title: "Website",
    text: "Die Web-Ansicht von Phlib bietet dieselben Kernfunktionen wie die App – in einem auf größere Bildschirme optimierten Layout. Nutzer:innen können ihre Bibliothek verwalten, BookMatch nutzen, Buchempfehlungen entdecken und Buddyreads verfolgen. Damit wird Phlib zur plattformübergreifenden Lösung für alle, die ihre Leseerfahrung flexibel gestalten möchten.",
    image: "/images/phlibWeb.png"
  },
  {
    title: "App",
    text: "Eine der Hauptfunktionen ist die Entdecken-Seite mit täglich wechselndem Match des Tages, individuellen Listen wie Top-Bücher der Woche oder Empfehlungen von Freunden und dem innovativen BookMatch-Feature. Dieses funktioniert ähnlich wie Tinder – Nutzer:innen entscheiden auf einen Blick, ob sie ein Buch interessiert oder nicht. Durch anpassbare Filter bietet BookMatch eine besonders schnelle und einfache Möglichkeit, neue Literatur zu finden. Zusätzlich ermöglicht Phlib das gemeinsame Lesen durch Buddyreads, das Teilen von Leseupdates im Feed und eine persönliche Lesestatistik mit Streaks und Jahres-Challenges. Visuell ansprechend und intuitiv gestaltet, bringt Phlib Übersicht, Motivation und Inspiration in den Lesealltag.",
    image: "/images/Entdecken.jpg"
  },
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
