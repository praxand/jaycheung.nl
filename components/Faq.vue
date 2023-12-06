<template>
  <div class="py-24 sm:py-32 lg:py-40">
    <div class="divide-y divide-gray-900/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>

      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <Disclosure
          as="div"
          v-for="faq in faqs"
          :key="faq.question"
          class="pt-6"
          v-slot="{ open }"
        >
          <dt>
            <DisclosureButton
              class="flex w-full items-start justify-between text-left text-gray-900"
            >
              <span class="text-base font-semibold leading-7">
                {{ faq.question }}
              </span>

              <span class="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  v-if="!open"
                  class="h-6 w-6"
                  aria-hidden="true"
                />

                <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
              </span>
            </DisclosureButton>
          </dt>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "Who are you, and what do you do?",
    answer: "I'm a software developer currently studying and working at Bit Academy in Amsterdam, The Netherlands. My primary focus is on creating efficient and innovative solutions using various technologies.",
  },
  {
    question: "What programming languages do you specialize in?",
    answer: "I am proficient in PHP, HTML, CSS, JavaScript, and MySQL. These languages form the core of my skill set, allowing me to develop robust and dynamic web applications.",
  },
  {
    question: "Why do you love working with Laravel?",
    answer: "Laravel has captured my interest and devotion due to its elegance, expressive syntax, and powerful features. It allows me to streamline the development process and create scalable and maintainable applications.",
  },
  {
    question: "What is Bit Academy, and how has it influenced your learning and work?",
    answer: "Bit Academy is an educational institution in Amsterdam. Studying and working there has provided me with a dynamic environment to enhance my skills and collaborate with like-minded individuals, fostering both personal and professional growth.",
  },
  {
    question: "Are you open to learning new technologies?",
    answer: "Absolutely! I am always eager to expand my skill set and stay updated with the latest technologies. Learning new things is a crucial part of my approach to software development.",
  },
  {
    question: "How can I connect with you?",
    answer: "Feel free to reach out to me through LinkedIn or my contact page. I'm always open to networking, collaboration, and discussions related to software development.",
  },
  {
    question: "Are you open to learning new technologies?",
    answer: "Absolutely! I am always eager to expand my skill set and stay updated with the latest technologies. Learning new things is a crucial part of my approach to software development.",
  },
];
</script>
