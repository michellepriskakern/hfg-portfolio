<template>
  <nav class="fixed top-0 left-[100px] z-50 flex items-center h-[80px]">
    <ul class="flex text-[1.5rem] text-black">
      <li class="mr-[32px]">
        <NuxtLink 
          to="/" 
          class="relative inline-block no-underline group link-item"
          :class="{ 'active-link': $route.path === '/' || activeLink === '/' }"
          exact
          @click="setActiveLink('/')"
        >
          <span class="rolling-text">
            <span class="line">
              <span v-for="(letter, index) in 'projects'.split('')" :key="'projects-line1-' + index" class="letter">
                {{ letter }}
              </span>
            </span>
            <span class="line second">
              <span v-for="(letter, index) in 'projects'.split('')" :key="'projects-line2-' + index" class="letter">
                {{ letter }}
              </span>
            </span>
          </span>
          <span class="active-underline" />
        </NuxtLink>
      </li>

      <li>
        <NuxtLink 
          to="/about" 
          class="relative inline-block no-underline group link-item"
          :class="{ 'active-link': $route.path === '/about' || activeLink === '/about' }"
          exact
          @click="setActiveLink('/about')"
        >
          <span class="rolling-text">
            <span class="line">
              <span v-for="(letter, index) in 'about'.split('')" :key="'about-line1-' + index" class="letter">
                {{ letter }}
              </span>
            </span>
            <span class="line second">
              <span v-for="(letter, index) in 'about'.split('')" :key="'about-line2-' + index" class="letter">
                {{ letter }}
              </span>
            </span>
          </span>
          <span class="active-underline" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const activeLink = ref('');
const router = useRouter();

const setActiveLink = (path) => {
  activeLink.value = path;
  router.push(path);
};
</script>

<style scoped>
nav {
  left: 50px;
  top: 0;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: transparent;
}

.link-item {
  color: black;
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  height: 1.4rem;
}

.rolling-text {
  display: inline-block;
  height: 1.4rem;
  overflow: hidden;
  position: relative;
  line-height: 1.4rem;
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

/* Unterstrich mit Farbe */
.link-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background-color: #8C8C8B;
  transition: width 0.4s ease, background-color 0.4s ease;
}

.group:hover::after {
  width: 100%;
}

.active-link::after {
  width: 100%;
  background-color: #D53C4F; /* Die neue aktive Farbe */
}
</style>
