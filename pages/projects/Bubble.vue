<template>
  <div>
    <!-- HERO SECTION -->
    <section class="relative w-full h-screen bg-cover bg-center flex items-end text-black"
      :style="{ backgroundImage: 'url(/images/bubble.jpg)' }">
      <div class="absolute bottom-10 left-10">
        <h1 class="text-6xl font-bold">Bubble</h1>
        <p class="text-2xl mt-2">Everyday support for borderliners</p>
      </div>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Linker Bereich -->
      <div class="text-xl">
        <p><span class="text-gray-400 font-semibold">Duration</span><br>1 semester,  study project</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Strategy</span><br>Research, concept, prototype, <br>  UI design, animation, video editing</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Tools</span><br>Figma, Miro, Notion, <br>  Premiere Pro, After Effects</p>
        <br>
        <p>
  <span class="text-gray-400 font-semibold">Team</span><br>
  <a href="https://yasminhaehnel.com" target="_blank" class="text-black-500 hover:underline">yasminhaehnel.com</a>, <br> 
  <a href="https://leaullmann.de" target="_blank" class="text-black-500 hover:underline">leaullmann.de</a>,  <br> 
<a href="https://vanessahiller.de" target="_blank" class="text-black-500 hover:underline">vanessahiller.de</a> <br> 
</p>
      </div>

      <!-- Rechter Bereich -->
      <div>
        <p class="text-4xl font-semibold">
          Im Kurs Invention Design 1 werden neue Produkte und Werkzeuge mit einer stark zukunftsorientierten Perspektive entworfen. Technologische Entwicklungen werden kritisch hinterfragt, um durch forschend-experimentelle Ansätze sinnvolle und innovative Anwendungsmöglichkeiten zu gestalten.
        </p>
      </div>
    </section>

   <!-- CONCEPT / PROZESS Umschalter -->
    <section
      class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 select-none"
      @touchstart="startTouch"
      @touchend="endTouch"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
    >
      <div></div>
      <div>
        <!-- Umschaltbare Überschrift -->
        <h2 class="text-3xl font-bold mb-4 cursor-pointer">
          <span
            @click="currentView = 'concept'"
            :class="currentView === 'concept' ? 'text-black' : 'text-gray-400'"
          >
            Concept
          </span>
          <span class="mx-4"></span>
          <span
            @click="currentView = 'process'"
            :class="currentView === 'process' ? 'text-black' : 'text-gray-400'"
          >
            Prozess
          </span>
        </h2>


        <!-- Animierter Textwechsel -->
        <transition name="fade" mode="out-in">
          <p :key="currentView" class="text-lg leading-relaxed">
            <!-- Concept Text -->
            <template v-if="currentView === 'concept'">
              People with borderline often experience intense emotions that are difficult to grasp. The topic is very sensitive, which is why we have invested a lot of time in our research and worked with various experts from different fields, all of whom work with borderline sufferers.
              <br><br>
              Our project shows how digital technologies can be used specifically to support people with borderline personality disorder.
              <br><br>
              By combining reflection, biometric data and AI-supported support, we want to help those affected to better understand their emotions and deal with critical moments.
              <br><br>
              It was particularly important to us to develop an application that can be seamlessly integrated into everyday life and supports both the therapeutic process and personal well-being.
              It is a fictitious future-oriented project.
            </template>
            <!-- Prozess Text -->
            <template v-else>
              Der Prozess begann mit einer tiefgreifenden Recherche zu Borderline. Interviews mit Expert:innen und Betroffenen haben unsere Sichtweise geschärft.
              <br><br>
              Es folgten Ideation-Workshops, das Erstellen von Personas und eine Vielzahl von Prototypen – analog wie digital.
              <br><br>
              Die finale Umsetzung wurde in Figma gestaltet und interaktiv mit After Effects und Premiere inszeniert.
            </template>
          </p>
        </transition>
      </div>
    </section>


    <!-- CONTENT SECTIONS -->
    <section class="container mx-auto px-8 py-16">
      <div class="space-y-[150px]">
        <div v-for="(section, index) in sections" :key="index" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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


<!-- CONTENT CAROUSEL SECTION -->
<section class="container mx-auto px-8 py-16 select-none">
  <div 
    class="relative"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDownCarousel"
    @mouseup="handleMouseUpCarousel"
  >
    <!-- Carousel -->
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: 'translateX(-' + currentSlide * 100 + '%)' }"
      >
        <div
          v-for="(section, index) in carouselSections"
          :key="index"
          class="min-w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4"
        >
          <div>
            <h2 class="text-3xl font-bold">{{ section.title }}</h2>
            <p class="mt-4 text-lg">{{ section.text }}</p>
          </div>
          <div>
            <img :src="section.image" :alt="section.title" class="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>

    <!-- Indikationspunkte -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <div
        v-for="(section, index) in carouselSections"
        :key="'dot-' + index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentSlide === index ? 'bg-black' : 'bg-gray-300'"
      ></div>
    </div>
  </div>
</section>



  </div>
</template>



<script setup>
import { ref } from 'vue'

// CONCEPT/PROZESS Umschalter
const currentView = ref('concept')

let touchStartX = 0
let touchEndX = 0
let mouseStartX = 0
let mouseEndX = 0

const startTouch = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const endTouch = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipeConceptProcess()
}

const handleSwipeConceptProcess = () => {
  const threshold = 50 // Minimum Swipe-Abstand
  const deltaX = touchEndX - touchStartX

  if (Math.abs(deltaX) > threshold) {
    if (deltaX < 0) currentView.value = 'process' // Swipe nach links
    else currentView.value = 'concept'           // Swipe nach rechts
  }
}

// Mouse-Events für Swipe
const handleMouseDown = (e) => {
  mouseStartX = e.clientX
}

const handleMouseUp = (e) => {
  mouseEndX = e.clientX
  handleSwipeConceptProcessMouse()
}

const handleSwipeConceptProcessMouse = () => {
  const threshold = 50 // Minimum Mouse Swipe-Abstand
  const deltaX = mouseEndX - mouseStartX

  if (Math.abs(deltaX) > threshold) {
    if (deltaX < 0) currentView.value = 'process' // Swipe nach links
    else currentView.value = 'concept'           // Swipe nach rechts
  }
}

// CAROUSEL SECTION für weitere Inhalte (z.B. App, Smartwatch usw.)

const currentSlide = ref(0)
const carouselSections = ref([
  {
    title: "App",
    text: "The main function of the app is reflection. Users can view measured data and critical moments and carry out an AI-supported reflection with ‘Bubble’ every day. This is documented and can be viewed again later in the journal. Anonymised critical moments can be replayed for better reflection.",
    image: "/images/bubble-app.png"
  },
  {
    title: "Smartwatch",
    text: "The smartwatch measures bio-metric data and recognises critical moments. If the values rise, a notification is sent and you can use the ‘do not disturb’ mode to notify the saved trusted persons in your environment.",
    image: "/images/bubble-smartwatch.png"
  },
  {
    title: "Tablet",
    text: "Our app supports therapy by allowing users to decide for themselves in therapy mode which data is shared with therapists. They see an overview of the relevant data since the last session on their tablet. The display can be made clearly visible using a whiteboard or projector. After therapy, the mode is deactivated and the data can only be viewed by the user again.",
    image: "/images/bubble-tablet.png"
  }
])

// Swipe-Logik für Carousel
let startX = 0

function handleTouchStartCarousel(e) {
  startX = e.touches[0].clientX
}

function handleTouchEndCarousel(e) {
  const endX = e.changedTouches[0].clientX
  handleSwipeCarousel(endX - startX)
}

function handleMouseDownCarousel(e) {
  startX = e.clientX
}

function handleMouseUpCarousel(e) {
  const endX = e.clientX
  handleSwipeCarousel(endX - startX)
}

function handleSwipeCarousel(deltaX) {
  const threshold = 50 // Minimum Swipe-Abstand
  if (Math.abs(deltaX) > threshold) {
    if (deltaX < 0) currentSlide.value = Math.min(currentSlide.value + 1, carouselSections.value.length - 1) // Swipe nach links
    else currentSlide.value = Math.max(currentSlide.value - 1, 0) // Swipe nach rechts
  }
}
</script>



<style scoped>
.container {
  max-width: 1200px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
 