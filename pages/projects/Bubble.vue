<template>
  <div>
    <!-- HERO SECTION -->
    <section class="pt-[300px] pb-[50px] px-[50px]">
      <h1 class="text-[48px] font-bold" style="color: #D53C4F;">Bubble</h1>
      <p class="text-[24px]" style="color: #8C8C8B; margin-top: 2px;">Alltagsunterstützung für Borderline</p>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="px-[50px] grid grid-cols-1 md:grid-cols-4 gap-10 text-[18px]">
      <div>
        <h2 class="text-[12px] font-semibold">Duration</h2>
        <p>Oktober 2024 - Januar 2025</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">Team</h2>
        <p>Lea, Yasmin, Vanessa</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">Tools</h2>
        <p>Figma, Miro, Notion, Premiere, <br> After Effects</p>
      </div>
      <div>
        <h2 class="text-[12px] font-semibold">Strategy</h2>
        <p>Wireframes, Research, Concept</p>
      </div>
    </section>

    <!-- IMAGE SECTION -->
    <section class="mt-[50px] flex justify-center">
      <img src="/images/bubble.jpg" alt="Project Image" class="w-[1428px] h-[792px] object-cover rounded-lg shadow-md" />
    </section>

    <!-- DESCRIPTION SECTION -->
<!-- DESCRIPTION SECTION -->
<section class="pl-[50px] mt-[50px] text-[24px] text-gray-800 leading-relaxed">
  <div class="max-w-[800px]"> <!-- Begrenzung der Textbreite -->
    <p>
      This project shows how digital technologies can be used specifically to support people with borderline personality disorder. 
      By combining reflection, biometric data and AI-supported support, we want to help those affected to better understand their emotions and deal with critical moments.
      <br><br>
      It was particularly important to us to develop an application that can be seamlessly integrated into everyday life and supports both the therapeutic process and personal well-being.
    </p>
  </div>
</section>


  </div>
</template>

<script setup>
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

/* Präziser Abstand zwischen Titel und Untertitel in der Hero-Section */
section h1 + p {
  margin-top: 2px !important;
}
</style>
