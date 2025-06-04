<template>
  <transition name="fade" appear>
    <div class="about-container">
      <!-- Hero Section -->
      <section class="hero-section relative h-screen w-full">
        <img src="public/images/skydiving.png" alt="Skydiving" class="hero-img" />
        <div class="hero-text absolute text-center">
          <h2 class="text-white text-3xl sm:text-7xl font-regular relative" style="height: 10rem; overflow: hidden; line-height: 5rem;">
          always searching for<br />
          <div class="phrase-wrapper">
            <div
                class="phrase-slider"
                :class="{ 'no-transition': !animate }"
                :style="{
                transform: `translateY(-${phraseIndex * 5}rem)`}"
              >
                <div
  v-for="(phrase, index) in fullPhrases"
  :key="`phrase-${index}`"
  class="phrase-line font-bold"
  :style="{ color: phrase.color }"
>
  <span
    v-for="(char, cidx) in phrase.text.split('')"
    :key="`char-${index}-${phraseIndex}-${cidx}`"
    class="char"
    :style="{ animationDelay: `${cidx * 0.06}s` }"
  >
    {{ char === ' ' ? '\u00A0' : char }}
  </span>
</div>

              </div>
            </div>
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
                <span
                  v-for="(line, lidx) in splitIntoLines(para)"
                  :key="`line-${idx}-${lidx}`"
                  class="block"
                >
                  {{ line }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Komponente hier -->
      <Footer />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Footer from '~/components/Footer.vue'

// Helper-Funktion zur Begrenzung auf 13 Wörter pro Zeile
function splitIntoLines(paragraph: string): string[] {
  const words = paragraph.trim().split(/\s+/)
  const lines: string[] = []

  let i = 0
  while (i < words.length) {
    const remaining = words.length - i

    if (remaining <= 23) {
      if (remaining <= 10) {
        lines.push(words.slice(i).join(' '))
        break
      }

      const firstPart = Math.ceil(remaining / 2)
      const secondPart = remaining - firstPart

      if (firstPart < 10) {
        const middle = Math.floor(remaining / 2)
        lines.push(words.slice(i, i + middle).join(' '))
        lines.push(words.slice(i + middle).join(' '))
        break
      }

      lines.push(words.slice(i, i + firstPart).join(' '))
      lines.push(words.slice(i + firstPart).join(' '))
      break
    }

    lines.push(words.slice(i, i + 10).join(' '))
    i += 10
  }

  return lines
}

// Hero Text Animation
const phraseIndex = ref(0)
const animate = ref(true)
const phrases = [
  { text: 'meaningful experiences', color: '#FDD835' },
  { text: 'better interactions', color: '#FB8C00' },
  { text: 'new ideas', color: '#AB47BC' }
]


const fullPhrases = [...phrases, ...phrases, ...phrases, ...phrases]


let phraseInterval: number


onMounted(() => {
  phraseInterval = setInterval(() => {
    if (phraseIndex.value === phrases.length) {
      // Disable animation, spring to top instantly
      animate.value = false
      phraseIndex.value = 0
    }

    // In the next tick, re-enable animation and continue
    setTimeout(() => {
      animate.value = true
      phraseIndex.value += 1
    }, 20)
  }, 3200)
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
    sections[(activeIndex.value + len - 1) % len],
    sections[activeIndex.value],
    sections[(activeIndex.value + 1) % len]
  ]
})

const reorderedTitles = computed(() => {
  const len = sections.length
  const current = sections[activeIndex.value]
  const prev = sections[(activeIndex.value + len - 1) % len]
  const next = sections[(activeIndex.value + 1) % len]
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

.phrase-slider.no-transition {
  transition: none !important;
}






.phrase-wrapper {
  height: 5rem; /* Höhe einer Zeile */
  overflow: hidden;
  position: relative;
}

.phrase-slider {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease-in-out;
}

.phrase-line {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  font-weight: inherit;
}


.slide-up-enter-from {
  transform: translateY(100%); /* Start unten */
  opacity: 0;
  position: absolute;
  width: 100%;
}

.slide-up-enter-to {
  transform: translateY(0%); /* An Position */
  opacity: 1;
  position: relative;
  width: 100%;
}

.slide-up-leave-from {
  transform: translateY(0%); /* Start an Position */
  opacity: 1;
  position: relative;
  width: 100%;
}

.slide-up-leave-to {
  transform: translateY(-100%); /* Nach oben raus */
  opacity: 0;
  position: absolute;
  width: 100%;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
  position: relative;
}



.char {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  animation: roll-up 0.6s forwards;
}

@keyframes roll-up {
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
  line-height: 1.2;
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
