<template>
  <div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>

              <rect width="100%" height="100%" stroke-width="0" fill="white" />

              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>

              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
          </div>

          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Get in touch
          </h2>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            I value your feedback and inquiries. Whether you have a question,
            suggestion, or just want to say hello, I'd love to hear from you.
            Feel free to reach out to me using the contact form below, and I
            will get back to you as soon as possible. Your input is important to
            me as I strive to enhance your experience and provide the best
            possible service. Thank you for getting in touch with me!
          </p>

          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>

                <EnvelopeIcon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>

              <dd>
                <a class="hover:text-gray-900" href="mailto:jay@praxand.com">
                  jay@praxand.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <form
        @submit.prevent="submitForm"
        action="https://api.web3forms.com/submit"
        method="POST"
        class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 h-screen"
      >
        <input
          type="hidden"
          name="access_key"
          value="c4ea3258-c70b-45ae-a9e2-1fa36a5bbfd5"
        />

        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

        <input type="hidden" name="redirect" value="https://jaycheung.nl/contact">

        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>

              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  v-model="formData.firstName"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="{
                    'ring-red-500 focus:ring-red-500': v$.firstName.$error,
                    'ring-[#42d392] ': !v$.firstName.$invalid,
                  }"
                  @change="v$.firstName.$touch"
                />
              </div>

              <span class="text-xs text-red-500" v-if="v$.firstName.$error">
                {{ v$.firstName.$errors[0].$message }}
              </span>
            </div>

            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>

              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  v-model="formData.lastName"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="{
                    'ring-red-500 focus:ring-red-500': v$.lastName.$error,
                    'ring-[#42d392] ': !v$.lastName.$invalid,
                  }"
                  @change="v$.lastName.$touch"
                />
              </div>

              <span class="text-xs text-red-500" v-if="v$.lastName.$error">
                {{ v$.lastName.$errors[0].$message }}
              </span>
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>

              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="formData.email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="{
                    'ring-red-500 focus:ring-red-500': v$.email.$error,
                    'ring-[#42d392] ': !v$.email.$invalid,
                  }"
                  @change="v$.email.$touch"
                />
              </div>

              <span class="text-xs text-red-500" v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>

            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>

              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>

              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  :class="{
                    'ring-red-500 focus:ring-red-500': v$.message.$error,
                    'ring-[#42d392] ': !v$.message.$invalid,
                  }"
                  @change="v$.message.$touch"
                />
              </div>

              <span class="text-xs text-red-500" v-if="v$.message.$error">
                {{ v$.message.$errors[0].$message }}
              </span>
            </div>
          </div>

          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';

useSeoMeta({
  title: "Contact | Jay Cheung",
  ogTitle: "Contact | Jay Cheung",
  description: "I value your feedback and inquiries. Whether you have a question, suggestion, or just want to say hello, I'd love to hear from you. Feel free to reach out to us using the contact form below, and I will get back to you as soon as possible. Your input is important to me as I strive to enhance your experience and provide the best possible service. Thank you for getting in touch with me!",
  ogDescription: "I value your feedback and inquiries. Whether you have a question, suggestion, or just want to say hello, I'd love to hear from you. Feel free to reach out to us using the contact form below, and I will get back to you as soon as possible. Your input is important to me as I strive to enhance your experience and provide the best possible service. Thank you for getting in touch with me!",
  ogImage: "https://jaycheung.nl/images/profile.png",
  twitterCard: 'summary_large_image',
});

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
});

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('First name is required', required),
    },
    lastName: {
      required: helpers.withMessage('Last name is required', required),
    },
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Email must be valid', email),
    },
    message: {
      required: helpers.withMessage('Message is required', required),
      minLength: helpers.withMessage('Message must be at least 10 characters', minLength(10)),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    document.querySelector('form').submit();
  }
};
</script>
