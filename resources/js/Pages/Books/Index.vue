<script setup>
import { inject } from 'vue'

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link, useForm } from '@inertiajs/vue3';
import Pagination from "@/Components/Pagination.vue";
import Filter from "@/Pages/Books/Partials/Filter.vue";

const dateTime = inject('dateTime')


defineProps({
    books: {
        type: Array
    }
});

const Headers = [
    {
        title: 'Actions',
        type: null
    },
    {
        title: 'Title',
        type: null
    },
    {
        title: 'Author',
        type: null
    },
    {
        title: 'Genre',
        type: null
    },
    {
        title: 'ISBN',
        type: null
    },
    {
        title: 'Published',
        type: null
    },
    {
        title: 'Publisher',
        type: null
    }
];

const filterOutData = (filteredData) => {
  const form = useForm(filteredData);
  form.post(route('books.list'), {
        preserveScroll: true,
        onSuccess: () => {
        },
        onError: () => {
        },
    });
}

</script>
<template>
  <AuthenticatedLayout>
    <template #header>
        <div class="flex justify-between">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">Books</h2>
        <Link href="/books/add" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
          Add Book
        </Link>
        <!-- <Card /> -->
      </div>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative overflow-x-auto">
        <Filter @filterData="filterOutData" />
    <table
      class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
    >
      <thead class="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th
            scope="col"
            v-for="(item, index) in Headers"
            :key="index"
            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
          >
            <template v-if="item.type">
               <template v-html="item.type" />
            </template>
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody
        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
      >
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="(item, index) in books.data" :key="index">
          
          <td
            class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
          >
            <Link preserve-scroll :href="`/books/edit/${item.id}`" class="text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</Link
            >
          </td>
          
          <td
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
          <Link preserve-scroll :href="`/books/edit/${item.id}?t=view`" class="text-blue-600 dark:text-blue-500 hover:underline"
              >{{ item.title }}</Link
            >
          </td>
          <td
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.author }}
          </td>
          <td
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.genre }}
          </td>
          <td
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.isbn }}
          </td>
          <td
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
          {{ dateTime(item.published).format('LLL')  }}
          </td>
          <td
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.publisher }}
          </td>
        </tr>
        <tr v-if="books.data.length == 0">
        <td colspan="7" class="py-4 px-6 text-sm font-medium whitespace-nowrap text-center"
          >No data available...
        </td>
            
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-center">
      <Pagination :items="books" />
    </div>
  </div>
  </AuthenticatedLayout>
</template>