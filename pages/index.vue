<template>
  <div class="flex flex-col lg:flex-row h-screen overflow-hidden">
    <!-- Linke Spalte (Titel) -->
    <div
      ref="textScrollContainer"
      class="w-full lg:w-[48%] flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:pl-12 pb-12 overflow-hidden relative"
    >

      <div class="relative h-full lg:h-screen flex items-center justify-center">
        <div
          v-for="(project, i) in projects.slice(activeIndex)"
          :key="`title-${activeIndex + i}`"
          class="absolute transition-all duration-300 w-full flex flex-col items-start"
          :style="{
            transform: `translateY(${i * 100}%)`,
            opacity: i === 0 ? 1 : 0.2,
            pointerEvents: i === 0 ? 'auto' : 'none'
          }"
        >
          <div class="flex flex-col sm:flex-row items-start sm:items-center">
            <NuxtLink
              :to="project.slug"
              class="group"
            >
            <h2
  class="rolling-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-10 relative z-10 leading-big"
  :class="{
    'text-black opacity-100': i === 0,
    'text-gray-400 opacity-80': i !== 0
  }"
>
  <span class="rolling-text">
    <span class="line">
      <span
        v-for="(letter, index) in project.title.split('')"
        :key="'line1-' + index"
        class="letter"
      >
        {{ letter }}
      </span>
    </span>
    <span class="line second">
      <span
        v-for="(letter, index) in project.title.split('')"
        :key="'line2-' + index"
        class="letter"
      >
        {{ letter }}
      </span>
    </span>
  </span>
</h2>

            </NuxtLink>

            <div
              v-if="i === 0"
              class="sm:ml-4 text-sm sm:text-base md:text-lg text-gray-600 font-light leading-normal max-w-[35ch] text-balance flex flex-col opacity-100 transition-opacity duration-500 mt-4 sm:mt-12"
            >
            <p class="subtitle">
  <span
    v-for="(word, index) in project.subtitle.split(' ')" 
    :key="index" 
    class="word inline-block"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    {{ word }}
  </span>
</p>


            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rechte Spalte (Bilder) -->
    <div
      ref="scrollContainer"
      class="w-full lg:w-[52%] h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col items-center justify-start px-4"
    >
      <div
        v-for="(project, index) in projects"
        :key="`card-${index}-${project.slug}`"
        class="relative flex items-center justify-center h-screen snap-center transition-transform duration-300"
        :class="{
          'scale-100 blur-0 opacity-100': index === activeIndex,
          'scale-95 blur-sm opacity-50': index !== activeIndex
        }"
      >
        <NuxtLink
          :to="project.slug"
          class="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[750px] transition-all duration-300"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const originalProjects = [
  {
    title: 'zenzone',
    subtitle: 'Entspannung im Alltag',
    image: '/images/zenzone.png',
    slug: '/projects/zenzone'
  },
  {
    title: 'human head',
    subtitle: 'Interaktive Ausstellungs Gestaltung',
    image: '/images/humanhead.png',
    slug: '/projects/thehumanhead'
  },
  {
    title: 'Phlib',
    subtitle: 'Finde was du wirklich lesen willst',
    image: '/images/phlib.png',
    slug: '/projects/phlib'
  },
  {
    title: 'Bubble',
    subtitle: 'Alltagsunterstützung für Borderline',
    image: '/images/bubble.jpg',
    slug: '/projects/bubble'
  }
];

const projects = ref(Array(100).fill(originalProjects).flat());
const activeIndex = ref(originalProjects.length * 10);
const scrollContainer = ref(null);
const leftScrollOffset = ref(0);
let isAdjusting = false;

const infiniteScrollProjects = computed(() => {
  const visibleProjects = projects.value.length;
  const offset = activeIndex.value % visibleProjects;
  return [...projects.value.slice(offset), ...projects.value.slice(0, offset)];
});

const handleScroll = () => {
  if (isAdjusting) return;
  const container = scrollContainer.value;
  if (!container) return;

  const items = container.querySelectorAll('.snap-center');
  let closestIndex = 0;
  let closestDistance = Infinity;

  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const distanceToCenter = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
    if (distanceToCenter < closestDistance) {
      closestDistance = distanceToCenter;
      closestIndex = index;
    }
  });

  activeIndex.value = closestIndex;
  leftScrollOffset.value = -container.scrollTop;

  const scrollTop = container.scrollTop;
  const sectionHeight = container.scrollHeight / 3;

  if (scrollTop >= sectionHeight * 2.5) {
    isAdjusting = true;
    requestAnimationFrame(() => {
      container.scrollTop -= sectionHeight;
      isAdjusting = false;
    });
  }
};

onMounted(() => {
  const container = scrollContainer.value;
  if (!container) return;

  container.addEventListener('scroll', handleScroll);
  container.style.scrollBehavior = 'auto';
  setTimeout(() => {
    container.scrollTop = container.scrollHeight / 2;
    container.style.scrollBehavior = 'smooth';
    leftScrollOffset.value = -container.scrollTop;
  }, 50);
});

onUnmounted(() => {
  const container = scrollContainer.value;
  if (container) {
    container.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
html,
body {
  overflow: hidden;
  height: 100%;
}

.subtitle {
  max-height: 6em; /* Maximal 3 Zeilen */
  line-height: 1.5; /* Abstände zwischen den Zeilen */
  overflow: hidden; /* Verhindert, dass Text überläuft */
  white-space: normal; /* Standard Textumbruch */
  word-wrap: break-word; /* Sicherstellen, dass lange Worte auch umgebrochen werden */
}

.word {
  display: inline-block; /* Damit die Wörter im Textfluss untereinander angezeigt werden */
  margin-right: 0.25rem;
  opacity: 0; /* Startet als unsichtbar */
  animation: fadeIn 0.5s forwards; /* Nur Opazität animieren */
}

.subtitle p {
  margin: 0;
  padding: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}




.rolling-text {
  display: inline-block;
  height: 1.4em;
  overflow: hidden;
  position: relative;
}

.rolling-text .line {
  display: flex;
  transition: transform 0.8s ease;
  transform: translateY(0%);
}

.rolling-text .second {
  position: absolute;
  top: 100%;
  left: 0;
}

.group:hover .rolling-text .line {
  transform: translateY(-100%);
}

.letter {
  display: inline-block;
  transition: transform 0.8s ease, opacity 0.8s ease;
}

.rolling-text .line .letter {
  transform: translateY(0%);
  opacity: 1;
}

.rolling-text .second .letter {
  transform: translateY(100%);
  opacity: 0;
}

.group:hover .rolling-text .line .letter {
  transform: translateY(-100%);
  opacity: 0;
}
.group:hover .rolling-text .second .letter {
  transform: translateY(0%);
  opacity: 1;
}

/* Delay pro Buchstabe */
.group:hover .rolling-text .line .letter:nth-child(1),
.group:hover .rolling-text .second .letter:nth-child(1) {
  transition-delay: 0s;
}
.group:hover .rolling-text .line .letter:nth-child(2),
.group:hover .rolling-text .second .letter:nth-child(2) {
  transition-delay: 0.05s;
}
.group:hover .rolling-text .line .letter:nth-child(3),
.group:hover .rolling-text .second .letter:nth-child(3) {
  transition-delay: 0.1s;
}
.group:hover .rolling-text .line .letter:nth-child(4),
.group:hover .rolling-text .second .letter:nth-child(4) {
  transition-delay: 0.15s;
}
.group:hover .rolling-text .line .letter:nth-child(5),
.group:hover .rolling-text .second .letter:nth-child(5) {
  transition-delay: 0.2s;
}
.group:hover .rolling-text .line .letter:nth-child(6),
.group:hover .rolling-text .second .letter:nth-child(6) {
  transition-delay: 0.25s;
}
.group:hover .rolling-text .line .letter:nth-child(7),
.group:hover .rolling-text .second .letter:nth-child(7) {
  transition-delay: 0.3s;
}
.group:hover .rolling-text .line .letter:nth-child(8),
.group:hover .rolling-text .second .letter:nth-child(8) {
  transition-delay: 0.35s;
}

</style>
