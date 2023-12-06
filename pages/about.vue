<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <div class="py-24 sm:py-32">
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Greetings! I'm Jay, a software developer hailing from the picturesque
          landscapes of The Netherlands. My journey into the realm of
          programming began with a profound curiosity about computers and a
          burning desire to explore the art of coding. Despite initially
          pursuing a path in economics, my passion for technology led me to
          embark on a new adventure as a student software developer.
        </p>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          In the world of coding, I find solace and excitement in bringing ideas
          to life through personal coding projects during my spare time. It's
          not just a profession but a continuous exploration of creativity and
          problem-solving.
        </p>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          While I have a deep affection for Laravel, with its elegant syntax and
          powerful features, my current endeavors include delving into the
          realms of Nuxt and Vue. The constant evolution of technologies keeps
          me on my toes, and I embrace the challenge of expanding my skill set.
        </p>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          Beyond the screen, I have a rich tapestry of interests. In my younger
          years, I kicked a soccer ball around the field, experiencing the
          thrill of teamwork and competition. Additionally, the melody of the
          violin used to resonate in my life for 9 until the beginning of 2023,
          adding a harmonious balance to my pursuits.
        </p>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          As I navigate this dynamic journey of software development, I'm not
          just crafting code; I'm weaving stories and solutions that bridge the
          gap between imagination and reality. Join me in this adventure, where
          every line of code tells a tale of passion, growth, and endless
          possibilities.
        </p>
      </div>

      <div class="py-24 sm:py-32 grid grid-cols-1 gap-4">
        <Experiences />

        <Educations />
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Jay Cheung",
  ogTitle: "Jay Cheung",
  description:
    "Hello there! I'm a passionate software developer currently immersed in the dynamic world of technology at Bit Academy in the vibrant city of Amsterdam, The Netherlands. My professional journey revolves around the art and science of crafting efficient and innovative solutions. A devoted enthusiast of Laravel, I find joy in leveraging its capabilities to build robust applications.",
  ogDescription:
    "Hello there! I'm a passionate software developer currently immersed in the dynamic world of technology at Bit Academy in the vibrant city of Amsterdam, The Netherlands. My professional journey revolves around the art and science of crafting efficient and innovative solutions. A devoted enthusiast of Laravel, I find joy in leveraging its capabilities to build robust applications.",
  ogImage: "https://jaycheung.nl/images/profile.png",
  twitterCard: "summary_large_image",
});
</script>
