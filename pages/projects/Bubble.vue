<template>
  <div>
    <!-- HERO SECTION -->
    <section class="relative w-full h-screen bg-cover bg-center flex items-end text-black"
      :style="{ backgroundImage: 'url(/images/bubble.jpg)' }">
      <div class="absolute bottom-10 left-10">
        <h1 class="text-6xl font-bold">Bubble</h1>
        <p class="text-2xl mt-2">Everyday support for borderliners</p>
      </div>
    </section>

    <!-- PROJECT INFO SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Linker Bereich -->
      <div class="text-xl">
        <p><span class="text-gray-400 font-semibold">Duration</span><br>1 semester,  study project</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Strategy</span><br>Research, concept, prototype, <br>  UI design, animation, video editing</p>
        <br>
        <p><span class="text-gray-400 font-semibold">Tools</span><br>Figma, Miro, Notion, <br>  Premiere Pro, After Effects</p>
        <br>
        <p>
  <span class="text-gray-400 font-semibold">Team</span><br>
  <a href="https://yasminhaehnel.com" target="_blank" class="text-black-500 hover:underline">yasminhaehnel.com</a>, <br> 
  <a href="https://leaullmann.de" target="_blank" class="text-black-500 hover:underline">leaullmann.de</a>,  <br> 
<a href="https://vanessahiller.de" target="_blank" class="text-black-500 hover:underline">vanessahiller.de</a> <br> 
</p>
      </div>

      <!-- Rechter Bereich -->
      <div>
        <p class="text-4xl font-semibold">
          Im Kurs Invention Design 1 werden neue Produkte und Werkzeuge mit einer stark zukunftsorientierten Perspektive entworfen. Technologische Entwicklungen werden kritisch hinterfragt, um durch forschend-experimentelle Ansätze sinnvolle und innovative Anwendungsmöglichkeiten zu gestalten.
        </p>
      </div>
    </section>

    <!-- KONZEPT SECTION -->
    <section class="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div></div>
      <div>
        <h2 class="text-3xl font-bold mb-4">Concept</h2>
        <p class="text-lg leading-relaxed">
          People with borderline often experience intense emotions that are difficult to grasp. The topic is very sensitive, which is why we have invested a lot of time in our research and worked with various experts from different fields, all of whom work with borderline sufferers.
          <br><br>
          Our project shows how digital technologies can be used specifically to support people with borderline personality disorder.
          
          By combining reflection, biometric data and AI-supported support, we want to help those affected to better understand their emotions and deal with critical moments.
          <br><br>
          It was particularly important to us to develop an application that can be seamlessly integrated into everyday life and supports both the therapeutic process and personal well-being.<br> It is a fictitious future-oriented project.
        </p>
      </div>
    </section>

    <!-- CONTENT SECTIONS -->
    <section class="container mx-auto px-8 py-16">
      <div class="space-y-[150px]">
        <div v-for="(section, index) in sections" :key="index" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div v-if="index % 2 === 0">
            <h2 class="text-3xl font-bold">{{ section.title }}</h2>
            <p class="mt-4 text-lg">{{ section.text }}</p>
          </div>
          <div>
            <img :src="section.image" :alt="section.title" class="rounded-lg shadow-md" />
          </div>
          <div v-if="index % 2 !== 0">
            <h2 class="text-3xl font-bold">{{ section.title }}</h2>
            <p class="mt-4 text-lg">{{ section.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "App",
    text: "The main function of the app is reflection. Users can view measured data and critical moments and carry out an AI-supported reflection with ‘Bubble’ every day. This is documented and can be viewed again later in the journal. Anonymised critical moments can be replayed for better reflection.",
    image: "/images/bubble-app.png"
  },
  {
    title: "Smartwatch",
    text: "The smartwatch measures bio-metric data and recognises critical moments. If the values rise, a notification is sent and you can use the ‘do not disturb’ mode to notify the saved trusted persons in your environment. ",
    image: "/images/bubble-smartwatch.png"
  },
  {
    title: "Tablet",
    text: "Our app supports therapy by allowing users to decide for themselves in therapy mode which data is shared with therapists. They see an overview of the relevant data since the last session on their tablet. The display can be made clearly visible using a whiteboard or projector. After therapy, the mode is deactivated and the data can only be viewed by the user again.",
    image: "/images/bubble-tablet.png"
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
 