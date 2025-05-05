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
              <span class="rolling-text text-wrapper">
                <!-- Static Text -->
                <span class="text-content default-text">
                  <span v-for="(letter, index) in 'projects'.split('')" 
                        :key="'projects-letter-' + index" 
                        class="letter">
                    {{ letter }}
                  </span>
                </span>
                <!-- Animated Hover Text -->
                <span class="text-content hover-text">
                  <span v-for="(letter, index) in 'projects'.split('')" 
                        :key="'projects-hover-letter-' + index" 
                        class="letter hover-animate"
                        :style="{ animationDelay: `${index * 0.05}s` }">
                    {{ letter }}
                  </span>
                </span>
              </span>
              <!-- Underline Indicator -->
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
              <span class="rolling-text text-wrapper">
                <!-- Static Text -->
                <span class="text-content default-text">
                  <span v-for="(letter, index) in 'about'.split('')" 
                        :key="'about-letter-' + index" 
                        class="letter">
                    {{ letter }}
                  </span>
                </span>
                <!-- Animated Hover Text -->
                <span class="text-content hover-text">
                  <span v-for="(letter, index) in 'about'.split('')" 
                        :key="'about-hover-letter-' + index" 
                        class="letter hover-animate"
                        :style="{ animationDelay: `${index * 0.05}s` }">
                    {{ letter }}
                  </span>
                </span>
              </span>
              <!-- Underline Indicator -->
              <span class="active-underline" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Global lowercase */
.lowercase {
  text-transform: lowercase;
}

/* Base Link Color */
.link-item {
  color: black;
}

/* Text Wrapper */
.rolling-text .text-wrapper {
  position: relative;
  display: inline-block;
  height: 1em;
  overflow: hidden;
}

/* Default text visible */
.default-text {
  transition: opacity 0.3s ease;
}

/* Hover text hidden initially */
.hover-text {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

/* Hover state */
.group:hover .default-text {
  opacity: 0;
}
.group:hover .hover-text {
  opacity: 1;
}

/* Letter styling */
.letter {
  display: inline-block;
  transform: translateY(0);
  opacity: 1;
}

/* Animate only on hover */
.group:hover .hover-animate {
  animation: rollUp 0.4s forwards;
}

@keyframes rollUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Active underline animation */
.active-underline {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background-color: black;
  transition: width 0.4s ease;
  margin-top: 4px;
}

/* Animate underline when active */
.active-link .active-underline {
  width: 100%;
}
</style>
