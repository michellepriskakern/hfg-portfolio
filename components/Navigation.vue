<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex items-start p-6 lowercase">
    <div class="relative">
      <div class="w-[360px] py-2 px-8">
        <ul class="flex space-x-8 text-base text-black">
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
      </div>
    </div>
  </nav>
</template>


<style scoped>


.lowercase {
  text-transform: lowercase;
}

.link-item {
  color: black;
}

.rolling-text {
  display: inline-block;
  height: 1.4em; /* vorher 1em */
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

/* NUR beim Hover die Verzögerung anwenden */
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



/* Active underline animation */
.active-underline {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background-color: black;
  transition: width 0.4s ease, transform 0.4s ease;
  margin-top: 1px;
  transform: scaleX(0); /* Hinzufügen einer Startposition für den Unterstrich */
  transform-origin: left center; /* Der Unterstrich wächst von links */
}

.group:hover .active-underline {
  width: 100%;
  transform: scaleX(1); /* Der Unterstrich wächst bei Hover */
}

/* Animate underline when active */
.active-link .active-underline {
  width: 100%;
  transform: scaleX(1); /* Aktiviert den Unterstrich im aktiven Zustand */
}


</style>
