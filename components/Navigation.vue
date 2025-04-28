<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex items-start p-6">
    <div class="relative">
      <div class="bg-white rounded-full w-[360px] py-2 px-8 shadow-md">
        <ul class="flex space-x-8 text-base text-black">
          <li>
            <NuxtLink 
              to="/" 
              class="relative inline-block no-underline group"
              active-class="active-link"
            >
              <span class="rolling-text text-wrapper">
                <span class="text-content">
                  <span v-for="(letter, index) in 'Projects'.split('')" 
                        :key="'projects-letter-' + index" 
                        class="letter" 
                        :style="{ animationDelay: `${index * 0.05}s` }">
                    {{ letter }}
                  </span>
                </span>
                <span class="text-content hover-text">
                  <span v-for="(letter, index) in 'Projects'.split('')" 
                        :key="'projects-hover-letter-' + index" 
                        class="letter" 
                        :style="{ animationDelay: `${index * 0.05}s` }">
                    {{ letter }}
                  </span>
                </span>
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/about" 
              class="relative inline-block no-underline group"
              active-class="active-link"
            >
              <span class="rolling-text text-wrapper">
                <span class="text-content">
                  <span v-for="(letter, index) in 'About'.split('')" 
                        :key="'about-letter-' + index" 
                        class="letter" 
                        :style="{ animationDelay: `${index * 0.05}s` }">
                    {{ letter }}
                  </span>
                </span>
                <span class="text-content hover-text">
                  <span v-for="(letter, index) in 'About'.split('')" 
                        :key="'about-hover-letter-' + index" 
                        class="letter" 
                        :style="{ animationDelay: `${index * 0.05}s` }">
                    {{ letter }}
                  </span>
                </span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Style für aktive Links */
.active-link::after {
  width: 100%;
}

/* Rolling Text Style */
.rolling-text .text-wrapper {
  position: relative;
  display: inline-block;
  height: 1em;
  overflow: hidden;
}

.rolling-text .text-content {
  display: block;
  transition: transform 0.5s ease;
}

.rolling-text .hover-text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease, top 0.3s ease;
  z-index: 1;
}

/* Buchstaben einzeln */
.letter {
  display: inline-block;
  opacity: 1;
  transform: translateY(0);
}

/* Hover-Effekt */
.group:hover .letter {
  animation: rollUp 0.5s forwards;
}

/* Keyframes Animation */
@keyframes rollUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
