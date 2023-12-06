<template>
  <Disclosure
    as="nav"
    class="fixed z-50 w-full bg-white shadow"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex w-full justify-between">
          <div class="flex flex-shrink-0 items-center">
            <h1 class="font-semibold">Jay Cheung</h1>
          </div>

          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500"
              :class="{
                'border-b-2 border-indigo-500 text-gray-900': $route.path === '/',
              }"
            >
              Home
            </a>

            <a
              href="/contact"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500"
              :class="{
                'border-b-2 border-indigo-500 text-gray-900': $route.path === '/contact',
              }"
            >
              Contact
            </a>
          </div>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          as="a"
          href="/"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500"
          :class="{
            'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700':
              $route.path === '/',
          }"
        >
          Home
        </DisclosureButton>

        <DisclosureButton
          as="a"
          href="/contact"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500"
          :class="{
            'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700':
              $route.path === '/contact',
          }"
        >
          Contact
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
