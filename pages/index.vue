<template>
  <div class="h-screen flex overflow-hidden">
    <!-- Linke Spalte: Projektliste -->
    <div class="w-1/3 flex flex-col justify-center pl-12">
      <div class="relative space-y-8">
        <div v-for="(project, index) in projects" :key="project.slug"
          class="transition-opacity duration-500">
          <div class="flex items-start">
            <h2 class="text-6xl font-bold transition-colors duration-500"
              :class="{ 
                'text-black opacity-100': index === activeIndex, 
                'text-gray-400 opacity-50': index !== activeIndex 
              }">
              {{ project.title }}
            </h2>

            <div class="ml-4 text-sm text-gray-500 font-light leading-snug max-w-[150px] flex flex-col"
              :class="{ 
                'opacity-100': index === activeIndex, 
                'opacity-50': index !== activeIndex 
              }">
              <span v-for="line in formatSubtitle(project.subtitle)" :key="line">
                {{ line }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rechte Spalte: Unendlich scrollende Bilder -->
    <div ref="scrollContainer" class="w-2/3 h-screen overflow-y-scroll relative hide-scrollbar" @scroll="handleInfiniteScroll">
      <div ref="scrollContent" class="scroll-content">
        <div v-for="(project, index) in [...projects, ...projects, ...projects]" 
          :key="index"
          class="relative flex items-center justify-center snap-center project-card">
          
          <NuxtLink :to="project.slug" class="w-[600px] max-w-[600px] transition-all duration-500">
            <img :src="project.image" :alt="project.title" class="w-full h-auto object-cover rounded-lg shadow-lg">
          </NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const projects = ref([
  { title: "ZenZone", subtitle: "Entspannung im Alltag", image: "/images/zenzone.png", slug: "/projects/zenzone" },
  { title: "Human Head", subtitle: "Interaktive Ausstellungs Gestaltung", image: "/images/thehumanhead.jpg", slug: "/projects/thehumanhead" },
  { title: "Phlib", subtitle: "Finde was du wirklich lesen willst", image: "/images/phlib.jpg", slug: "/projects/phlib" },
  { title: "Bubble", subtitle: "Alltagsunterstützung für Borderline", image: "/images/bubble.jpg", slug: "/projects/bubble" }
]);

const scrollContainer = ref(null);
const scrollContent = ref(null);

const formatSubtitle = (subtitle) => {
  if (!subtitle) return ["", "", ""]; 

  const words = subtitle.split(" ");
  const wordCount = words.length;

  if (wordCount === 3) {
    return words; 
  } else {
    return [
      words.slice(0, Math.ceil(wordCount / 3)).join(" "),
      words.slice(Math.ceil(wordCount / 3), Math.ceil((2 * wordCount) / 3)).join(" "),
      words.slice(Math.ceil((2 * wordCount) / 3)).join(" "),
    ];
  }
};

// Funktion für das nahtlose Endlos-Scrolling
const handleInfiniteScroll = () => {
  if (!scrollContainer.value || !scrollContent.value) return;

  const scrollTop = scrollContainer.value.scrollTop;
  const scrollHeight = scrollContent.value.scrollHeight / 3; // 3-fache Kopie der Liste

  if (scrollTop >= scrollHeight * 2) {
    scrollContainer.value.scrollTop = scrollHeight;
  }

  if (scrollTop <= 0) {
    scrollContainer.value.scrollTop = scrollHeight;
  }
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContent.value.scrollHeight / 3;
    scrollContainer.value.addEventListener("scroll", handleInfiniteScroll);
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", handleInfiniteScroll);
  }
});
</script>

<style scoped>
/* ✅ Scroll-Container exakt so breit wie die Bilder */
.scroll-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Abstand zwischen den Bildern */
  padding-top: 10px;
  padding-bottom: 10px;
  width: 600px; /* Exakt so breit wie die Bilder */
  max-width: 600px; /* Falls die Größe angepasst wird */
  margin-left: auto;  
  margin-right: 50px; /* 50px Abstand zum rechten Rand */

  /* 🏆 Snap-Scrolling aktivieren */
  scroll-snap-type: y mandatory;
}

/* 🏆 Jedes Bild wird mittig gesnappt */
.project-card {
  scroll-snap-align: center;
}

/* Scrollbar verstecken */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE & Edge */
}
</style>
