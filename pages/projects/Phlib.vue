<template>
  <div>
    <!-- HERO SECTION -->
    <section class="relative w-full h-screen bg-cover bg-center flex items-end text-black"
      :style="{ backgroundImage: 'url(/images/phlib.png)' }">
      <div class="absolute bottom-10 left-10">
        <h1 class="text-6xl font-bold">Phlib</h1>
        <p class="text-2xl mt-2">Finde was du wirklich lesen willst</p>
      </div>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="text-xl">
        <p><span class="text-gray-400 font-semibold">Duration</span><br>1 semester, study project</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Strategy</span><br>Research, Interviews, Concept, interaction,<br>video conception, digital application, UI Design</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Tools</span><br>Figma, Premiere, Miro, Notion</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Team</span><br>Hope Sikuade, Vanessa Hiller</p>
      </div>
      <div>
        <p class="text-4xl font-semibold">
          Im Kurs Applicationdesign 1 entwickeln wir ein Softwareprodukt von Grund auf – von der ersten Idee über Konzeption und
          Gestaltung bis hin zum fertigen, nutzbaren Endprodukt. Im Fokus stehen dabei die Benutzerfreundlichkeit („Wie gut lässt
          sich die App nutzen?“), das visuelle Erscheinungsbild sowie die Umsetzung.
        </p>
      </div>
    </section>

    <!-- KONZEPT SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div></div>
      <div>
        <h2 class="text-3xl font-bold mb-4">Concept</h2>
        <p class="text-lg leading-relaxed">
          Unser Ziel ist es, eine App zu entwickeln, die das Finden von Büchern vereinfacht und personalisierte Empfehlungen bietet, die genau auf die individuellen Vorlieben der Nutzer:innen zugeschnitten sind. Um dieses Ziel zu erreichen, haben wir eine umfassende Recherche durchgeführt, die sich aus verschiedenen Methoden zusammensetzt: Neben einer detaillierten Konkurrenzanalyse haben wir Interviews geführt, Umfragen erstellt und Desk Research betrieben. Die daraus gewonnenen Erkenntnisse haben wir genutzt, um eine solide Grundlage für unser Konzept zu schaffen und Personas entwickelt, die die Bedürfnisse und Wünsche unserer Zielgruppe der Gen Z repräsentiert.
          <br><br> Unser Konzept baut auf diesen Erkenntnissen auf: Es vereint die Stärken existierender Apps und ergänzt sie durch innovative Ansätze. Wir wollen personalisierte Empfehlungen auf Basis von Emotionen, Stimmungen und Lesehistorie anbieten und dabei die Möglichkeit schaffen, Empfehlungen mit Freund:innen zu teilen. 
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
