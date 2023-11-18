<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<script setup>
import Pagination from '@/Components/Pagination.vue';
import { Link } from '@inertiajs/vue3';
import Chip from '@/Components/Chip.vue';

defineProps({
  events: {
    type: Object,
    required: true
  }
});

const colors = {
  'Inactive': 'yellow',
  'Active': 'green',
  'Expired': 'red',
  'Cancelled': 'pink',
  'Completed': 'green',
  'In progress': 'green'
}
</script>
<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Recent Events</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="event in events.data" :key="event.id" class="group relative">
            <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="event.cover_photo" :alt="event.name" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <Link :href="$page.props.auth.user?`/events/detail/${event.id}`:`/register`" preserve-scroll>
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ event.name }}
                  </Link>
                </h3>
                <Chip :color="colors[event.status]">{{ event.status }}</Chip>
              
              </div>
              <Link as="button" class="text-blue-600" :href="$page.props.auth.user?`/events/detail/${event.id}`:`/register`" preserve-scroll>
                Apply
              </Link>
            </div>
          </div>
          <div v-if="events.data.length == 0" class="group relative">
            <div class="py-4 px-6 text-sm font-medium whitespace-nowrap text-center mt-4 flex justify-between"
              >No Events available...
            </div>
          </div>
        </div>
        <div class="flex justify-center pt-8" v-if="events.data.length > 0">
          <Pagination :items="events" />
        </div>
      </div>
    </div>
  </template>
  
