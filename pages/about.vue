<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section relative h-screen w-full">
      <img src="public/images/skydiving.png" alt="Skydiving" class="hero-img" />
      <div class="hero-text absolute text-center">
        <h2 class="text-white text-3xl sm:text-7xl font-light">
          always searching for<br />
          <span class="font-bold" :style="{ color: currentColor }">{{ currentPhrase }}</span>
        </h2>
      </div>
    </section>

    <!-- About Sections -->
    <div class="flex flex-col lg:flex-row h-screen overflow-hidden">
      <!-- Linke Spalte (Titel) -->
      <div
        ref="textScrollContainer"
        class="w-full lg:w-1/3 flex flex-col justify-center px-6 py-12 lg:pl-12 overflow-hidden relative"
      >
        <div class="relative h-full flex items-center justify-center overflow-hidden">
          <div
            v-for="(section, i) in sections"
            :key="`title-${i}`"
            class="absolute transition-all duration-300 w-full flex flex-col items-start"
            :style="{
              transform: `translateY(${(i - activeIndex) * 100}%)`,
              opacity: i === activeIndex ? 1 : 0.2,
              pointerEvents: i === activeIndex ? 'auto' : 'none'
            }"
          >
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300"
              :class="{
                'text-black opacity-100': i === activeIndex,
                'text-gray-400 opacity-80': i !== activeIndex
              }"
            >
              {{ section.title }}
            </h2>
          </div>
        </div>
      </div>

      <!-- Rechte Spalte (scrollbare Texte) -->
      <div
        ref="scrollContainer"
        class="w-full lg:w-2/3 h-full lg:h-screen overflow-y-auto snap-y snap-mandatory flex flex-col items-center"
      >
        <div
          v-for="(section, index) in sections"
          :key="`card-${index}`"
          class="relative flex items-center justify-center min-h-[90vh] lg:h-screen snap-center transition-transform duration-300 px-8"
          :class="{
            'scale-100 blur-0 opacity-100': index === activeIndex,
            'scale-95 blur-sm opacity-60': index !== activeIndex
          }"
        >
          <div class="max-w-2xl text-center space-y-6 text-lg">
            <p v-for="(para, idx) in section.paragraphs" :key="`para-${idx}`">
              {{ para }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Hero Section Animation
const phrases = [
  { text: 'meaningful experiences', color: '#FDD835' },
  { text: 'better interactions', color: '#FB8C00' },
  { text: 'new ideas', color: '#AB47BC' }
]

const currentPhrase = ref(phrases[0].text)
const currentColor = ref(phrases[0].color)
let phraseIndex = 0
let phraseInterval: number

onMounted(() => {
  phraseInterval = setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length
    currentPhrase.value = phrases[phraseIndex].text
    currentColor.value = phrases[phraseIndex].color
  }, 5000)
})

onUnmounted(() => {
  clearInterval(phraseInterval)
})

// About Sections
const sections = [
  {
    title: 'Wer ich bin',
    paragraphs: [
      'Hi, ich bin Michelle und studiere derzeit im 4. Semester Interaktionsgestaltung in Schwäbisch Gmünd.',
      'Neben dem Studium findet man mich oft mit einem Buch in der Hand, auf Skiern oder in Museen – überall dort, wo es etwas Neues zu entdecken gibt.',
      'Gestaltung begleitet mich dabei immer: Ich liebe es, Eindrücke aufzusaugen, Neues auszuprobieren und daraus kreative Verbindungen zu schaffen.',
      'Außerdem bin ich eine echte Nachteule – abends kommen mir oft die besten Ideen.'
    ]
  },
  {
    title: 'Wie ich denke',
    paragraphs: [
      'Mich interessiert bei der Entwicklung eines neuen Produktes die Frage, warum wir Produkte auf eine bestimmte Art nutzen und wie unser Verhalten dadurch beeinflusst wird.',
      'Dabei ist es mir wichtig, mit Intention zu gestalten – bewusst Erfahrungen zu schaffen, die über das eigentliche Produkt hinausgehen.',
      'Design bedeutet für mich, Funktion, Material, Nutzung und Kontext zusammenzudenken und daraus Erlebnisse zu entwickeln.'
    ]
  },
  {
    title: 'Wie ich arbeite',
    paragraphs: [
      'Ich arbeite gerne strukturiert und mit einem Plan – auch wenn das in der Praxis mal besser und mal schlechter funktioniert.',
      'Besonders wichtig ist mir die Arbeit im Team. Man lernt unglaublich viel voneinander, bekommt neue Perspektiven und kann gemeinsam bessere Lösungen entwickeln.',
      'Ein gutes Produkt entsteht aus guter Zusammenarbeit, bei der jeder seine Perspektive einbringt.'
    ]
  }
]

// Scrolllogik
const activeIndex = ref(0)
const scrollContainer = ref<HTMLDivElement | null>(null)

const handleScroll = () => {
  const container = scrollContainer.value
  if (!container) return

  const items = container.querySelectorAll('.snap-center')
  let closestIndex = 0
  let closestDistance = Infinity

  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect()
    const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  activeIndex.value = closestIndex
}

onMounted(() => {
  const container = scrollContainer.value
  if (!container) return
  container.addEventListener('scroll', handleScroll)

  container.style.scrollBehavior = 'auto'
  setTimeout(() => {
    container.scrollTop = container.scrollHeight / 2
    container.style.scrollBehavior = 'smooth'
  }, 50)
})

onUnmounted(() => {
  const container = scrollContainer.value
  if (container) {
    container.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.about-container {
  font-family: 'Helvetica Neue', sans-serif;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-black {
  color: #000;
}

.text-gray-400 {
  color: #aaa;
}
</style>
