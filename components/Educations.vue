<template>
  <div class="p-4 bg-white rounded-lg shadow space-y-2">
    <h2 class="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
      Educations
    </h2>

    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(education, index) in educations"
        :key="index"
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div class="flex-shrink-0">
          <img
            :src="education.imageUrl"
            :alt="education.school + ' logo'"
            class="h-14 w-14 rounded-full"
          />
        </div>

        <div class="min-w-0 flex-1">
          <a
            :href="education.website"
            rel="noopener noreferrer"
            target="_blank"
            class="focus:outline-none"
          >
            <span class="absolute inset-0" aria-hidden="true" />

            <p class="text-sm font-medium text-gray-900">
              {{ education.school }}
            </p>

            <p class="truncate text-sm text-gray-500">
              {{ education.degree }}, {{ education.fieldOfStudy }}
            </p>

            <p class="truncate text-sm text-gray-500">
              {{ education.startDate }} - {{ education.endDate }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const educations = [
  {
    school: "Bit Academy",
    degree: "MBO Niveau 4",
    fieldOfStudy: "Software Developer",
    startDate: "2021",
    endDate: "2024",
    imageUrl: "https://media.licdn.com/dms/image/D4E0BAQEjQXVkdgocuA/company-logo_200_200/0/1688722510144/bit_academy_nl_logo?e=1709769600&v=beta&t=H0hWWn1kR3z_14_NaRbhdAIy1fKzmB37Q7hXTN3OpOU",
    website: "https://www.bit-academy.nl/",
  },
  {
    school: "Jac. P. Thijsse College",
    degree: "MAVO",
    fieldOfStudy: "Economie",
    startDate: "2017",
    endDate: "2021",
    imageUrl: "https://media.licdn.com/dms/image/C560BAQGOVMVhnoHoXw/company-logo_200_200/0/1631435166644/jac_p_thijsse_college_logo?e=1709769600&v=beta&t=bxIMK2gAV0Pxnq5AoPR_H79hG6Dx4oWgbZWP6pqPVeA",
    website: "https://www.jpthijsse.nl/",
  },
];
</script>
