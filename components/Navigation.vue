<template>

<nav class="fixed top-0 left-0 w-full bg-white p-4 z-50">
      <ul class="flex justify-end space-x-6 text-gray-700 text-base">
        <li><a href="#about" class="hover:text-purple-500">about</a></li>
        <li><a href="#projects" class="hover:text-purple-500">projects</a></li>
        <li><a href="#contact" class="hover:text-purple-500">contact</a></li>
      </ul>
    </nav>

</template>

<script>

</script>

<style>
@reference "tailwindcss";

.router-link-active {
 text-decoration: underline;
 @apply text-red-600;
}

a {
  @apply font-normal;
}

a:hover {
  @apply text-red-200;
}
</style>