<template>
  <transition name="fade" appear>
    <div class="about-container">
      <!-- Hero Section -->
      <section class="hero-section relative h-screen w-full">
        <img src="public/images/skydiving.png" alt="Skydiving" class="hero-img" />
        <div class="hero-text absolute text-center">
          <h2 class="text-white text-3xl sm:text-7xl font-regular">
            always searching for<br />
            <span class="font-bold" :style="{ color: currentColor }">{{ currentPhrase }}</span>
          </h2>
        </div>
      </section>

      <!-- About Sections -->
      <div class="flex flex-col lg:flex-row h-screen overflow-hidden">
        <!-- Linke Spalte -->
        <div class="w-full lg:w-2/5 flex flex-col justify-center px-6 py-12 lg:pl-12">
          <div class="flex flex-col gap-4 transition-all duration-500">
            <div
              v-for="(title, idx) in reorderedTitles"
              :key="`rotated-title-${idx}`"
              class="transition-opacity duration-500"
            >
              <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-bold"
                :class="{
                  'text-black': idx === 0,
                  'text-gray-400 opacity-80': idx !== 0
                }"
              >
                {{ title.title }}
              </h2>
            </div>
          </div>
        </div>

        <!-- Rechte Spalte -->
        <div
          ref="scrollContainer"
          class="w-full lg:w-3/5 h-full overflow-y-auto snap-y snap-mandatory flex flex-col items-center mt-20"
        >
          <div
            v-for="(section, index) in loopedSections"
            :key="`card-${index}`"
            class="relative flex items-center justify-center min-h-[90vh] lg:h-auto snap-center transition-transform duration-300 px-8"
            :class="{
              'scale-100 z-10': index % sections.length === activeIndex,
              'opacity-0': index % sections.length !== activeIndex
            }"
          >
            <div class="max-w-3xl text-left space-y-6 text-lg">
              <p
                v-for="(para, idx) in section.paragraphs"
                :key="`para-${idx}`"
                :style="{
                  transform: `translateY(${(idx - activeIndex) * 40}%)`,
                  opacity: idx === activeIndex ? 1 : 0.8,
                  pointerEvents: idx === activeIndex ? 'auto' : 'none'
                }"
              >
                {{ para }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Hero Text Animation
const phrases = [
  { text: 'meaningful experiences', color: '#FDD835' },
  { text: 'better interactions', color: '#FB8C00' },
  { text: 'new ideas', color: '#AB47BC' }
]
// const phrases = [
//   { text: 'meaningful experiences', color: '#D53C4F' },
//   { text: 'better interactions', color: '#D53C4F' },
//   { text: 'new ideas', color: '#D53C4F' }
// ]


const currentPhrase = ref(phrases[0].text)
const currentColor = ref(phrases[0].color)
let phraseIndex = 0
let phraseInterval: number

onMounted(() => {
  phraseInterval = setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length
    currentPhrase.value = phrases[phraseIndex].text
    currentColor.value = phrases[phraseIndex].color
  }, 2000)
})

onUnmounted(() => {
  clearInterval(phraseInterval)
})

// Sections
const sections = [
  {
    title: 'Wer ich bin',
    paragraphs: [
      'Hi, ich bin Michelle und studiere derzeit im 4. Semester Interaktionsgestaltung in Schwäbisch Gmünd. Neben dem Studium findet man mich oft mit einem Buch in der Hand, auf Skiern oder in Museen – überall dort, wo es etwas Neues zu entdecken gibt. Gestaltung begleitet mich dabei immer: Ich liebe es, Eindrücke aufzusaugen, Neues auszuprobieren und daraus kreative Verbindungen zu schaffen. Außerdem bin ich eine echte Nachteule – abends kommen mir oft die besten Ideen.',
    ]
  },
  {
    title: 'Wie ich vorgehe',
    paragraphs: [
      'Mich interessiert bei der Entwicklung eines neuen Produktes die Frage, warum wir Produkte auf eine bestimmte Art nutzen und wie unser Verhalten dadurch beeinflusst wird. Dabei ist es mir wichtig, mit Intention zu gestalten – bewusst Erfahrungen zu schaffen, die über das eigentliche Produkt hinausgehen. Design bedeutet für mich, Funktion, Material, Nutzung und Kontext zusammenzudenken und daraus Erlebnisse zu entwickeln.',
    ]
  },
  {
    title: 'Was mir wichtig ist',
    paragraphs: [
      'Ich arbeite gerne strukturiert und mit einem Plan – auch wenn das in der Praxis mal besser und mal schlechter funktioniert. Besonders wichtig ist mir die Arbeit im Team. Man lernt unglaublich viel voneinander, bekommt neue Perspektiven und kann gemeinsam bessere Lösungen entwickeln. Ein gutes Produkt entsteht aus guter Zusammenarbeit, bei der jeder seine Perspektive einbringt.',
    ]
  }
]

const activeIndex = ref(0)

const rotatedTitles = computed(() => {
  const len = sections.length
  return [
    sections[(activeIndex.value + len - 1) % len], // vorheriger
    sections[activeIndex.value],                   // aktuell
    sections[(activeIndex.value + 1) % len]       // nächster
  ]
})

// reorderedTitles stellt die Reihenfolge um
const reorderedTitles = computed(() => {
  const len = sections.length
  const current = sections[activeIndex.value]
  const prev = sections[(activeIndex.value + len - 1) % len]
  const next = sections[(activeIndex.value + 1) % len]

  // Die Reihenfolge: aktuell oben, nächster in der Mitte, vorheriger unten
  return [current, next, prev]
})

const loopCount = 100
const loopedSections = computed(() => Array(loopCount).fill(sections).flat())

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

  activeIndex.value = closestIndex % sections.length
}

onMounted(() => {
  const container = scrollContainer.value
  if (!container) return

  container.addEventListener('scroll', handleScroll)

  const startItem = container.querySelectorAll('.snap-center')[0] as HTMLElement
  setTimeout(() => {
    container.scrollTop = startItem.offsetTop
  }, 50)
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.about-container {
  font-family: 'Helvetica Neue', sans-serif;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
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
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-text h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2; /* ⬅️ wichtig */
}

.text-black {
  color: #000;
}

.text-gray-400 {
  color: #aaa;
}

.snap-center {
  scroll-snap-align: start;
}

.text-section {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

.text-section.active {
  opacity: 1;
}

.text-block {
  max-width: 50ch;
  word-break: break-word;
}
</style>