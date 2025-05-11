<template>
  <nav class="fixed top-0 left-[100px] z-50 flex items-center h-[80px]">
    <ul class="flex space-x-12 text-[1.5rem] text-black">
      <li>
        <NuxtLink 
          to="/" 
          class="relative inline-block no-underline group link-item"
          :class="{ 'active-link': $route.path === '/' }"
          exact
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
          :class="{ 'active-link': $route.path === '/about' }"
          exact
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

<style scoped>
nav {
  left: 50px; /* Exakter Abstand vom linken Rand */
  top: 0;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: transparent;
}

.link-item {
  color: black;
  font-size: 1.0rem; /* Schriftgröße exakt 1.5rem (24px) */
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

/* Ausgangszustand: Text normal sichtbar */
.rolling-text .line .letter {
  transform: translateY(0%);
  opacity: 1;
}
.rolling-text .second .letter {
  transform: translateY(100%);
  opacity: 0;
}

/* Hover-Zustand mit Animation + Verzögerung */
.group:hover .rolling-text .line .letter {
  transform: translateY(-100%);
  opacity: 0;
}
.group:hover .rolling-text .second .letter {
  transform: translateY(0%);
  opacity: 1;
}

/* Active underline animation */
.active-underline {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background-color: black;
  transition: width 0.4s ease;
}

.group:hover .active-underline {
  width: 100%;
}

.active-link .active-underline {
  width: 100%;
}
</style>
