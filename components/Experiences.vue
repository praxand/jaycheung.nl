<template>
  <div class="p-4 bg-white rounded-lg shadow space-y-2">
    <h2 class="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
      Experiences
    </h2>

    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div class="flex-shrink-0">
          <img
            :src="experience.imageUrl"
            :alt="experience.companyName + ' logo'"
            class="h-14 w-14 rounded-full"
          />
        </div>

        <div class="min-w-0 flex-1">
          <a
            :href="experience.website"
            rel="noopener noreferrer"
            target="_blank"
            class="focus:outline-none"
          >
            <span class="absolute inset-0" aria-hidden="true" />

            <p class="text-sm font-medium text-gray-900">
              {{ experience.title }}
            </p>

            <p class="truncate text-sm text-gray-500">
              {{ experience.companyName }} • {{ experience.employmentType }}
            </p>

            <p class="truncate text-sm text-gray-500">
              {{ experience.startDate }} - {{ experience.endDate }} • {{ experience.timeDifference }}
            </p>

            <!-- <p class="truncate text-sm text-gray-500">
              {{ experience.location }}
            </p> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let experiences = [
  {
    title: "Part of the team",
    companyName: "Bit Academy",
    employmentType: "Part-time",
    location: "Amsterdam, North Holland, Netherlands",
    startDate: "Nov 2023",
    endDate: "Present",
    imageUrl: "https://media.licdn.com/dms/image/D4E0BAQEjQXVkdgocuA/company-logo_200_200/0/1688722510144/bit_academy_nl_logo?e=1709769600&v=beta&t=H0hWWn1kR3z_14_NaRbhdAIy1fKzmB37Q7hXTN3OpOU",
    website: "https://www.bit-academy.nl/",
  },
  {
    title: "Software Developer",
    companyName: "SMIT. Digitaal vakmanschap",
    employmentType: "Full-time",
    location: "Limmen, North Holland, Netherlands",
    startDate: "Feb 2023",
    endDate: "Present",
    imageUrl: "https://media.licdn.com/dms/image/C4D0BAQHG0loy1ml2dQ/company-logo_200_200/0/1630570943366/smit_digitaal_vakmanschap_logo?e=1709769600&v=beta&t=1Os78L79_kMsidYI0ZvsPp_YJ3L49kUxayabG7HFeHA",
    website: "https://smit.net/",
  },
];

const calculateTimeDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth() + 1;

  return years === 0
    ? months === 1
      ? `${months} mo`
      : `${months} mos`
    : months === 0
    ? `${years} yr`
    : `${years} yr ${months} mos`;
};

experiences = experiences.map((experience) => {
  const { startDate, endDate } = experience;

  return {
    ...experience,
    timeDifference: calculateTimeDifference(startDate, endDate),
  };
});
</script>
