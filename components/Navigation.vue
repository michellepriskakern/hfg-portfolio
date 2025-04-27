<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex items-start p-6">
    <div class="relative">
      <div class="bg-white rounded-full w-[360px] py-2 px-8 shadow-md">
        <ul class="flex space-x-8 text-base text-black">
          <li>
            <NuxtLink 
              to="/" 
              class="relative inline-block no-underline after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
              active-class="active-link"
            >
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/about" 
              class="relative inline-block no-underline after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
              active-class="active-link"
            >
              About
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-link::after {
  width: 100%;
}
</style>
