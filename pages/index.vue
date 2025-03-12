<template>
  <div>
    <!--PROJEKTE-BEREICH -->
    <section id="projects" class="w-full p-10">
      <h2 class="text-5xl italic mb-6 text-green-600">Projekte</h2>

      <!-- Responsives Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Projekte -->
        <ProjectCard 
          title="zenzone" 
          subtitle="Interfacedesign 1" 
          image="/images/zenzone.png" 
        />

        <ProjectCard 
          title="Phlib" 
          subtitle="Application Design 1" 
          image="/images/phlib.jpg" 
        />

        <ProjectCard 
          title="Bubble" 
          subtitle="Invention Design 1" 
          image="/images/bubble.jpg" 
        />
        
      </div>
    </section>
  </div>
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue';
</script>

<style>
</style>
