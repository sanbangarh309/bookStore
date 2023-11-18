<script setup>
import { reactive } from 'vue'

import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';

defineProps({
    book: {
        type: Object,
    }
});

const emit = defineEmits(['filterData']);

const defaultValues = {
    title: null,
    author: null,
    published: null,
    isbn: null,
    genre: null
};

const filteredData = reactive(defaultValues);

const resetFilter = () => {
    for (const [key] of Object.entries(defaultValues)) {
        filteredData[key] = null
    }

    emit('filterData', {})
}

</script>
<template>
    <div class="m-2 max-w-screen">
  <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <h2 class="text-stone-700 text-xl font-bold">Apply filters</h2>
    <p class="mt-1 text-sm">Use filters to further refine search</p>
    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div class="flex flex-col">
        <InputLabel for="title" value="Title" />

                <TextInput
                    v-model="filteredData.title"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="title"
                    placeholder="Enter title"
                />
      </div>

      <div class="flex flex-col">
        <InputLabel for="author" value="Author" />

                <TextInput
                    v-model="filteredData.author"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="author"
                    placeholder="Enter title"
                />
      </div>

      <div class="flex flex-col">
        <InputLabel for="published" value="Published date" />

                <TextInput
                    v-model="filteredData.published"
                    type="date"
                    id="date"
                    required
                    class="mt-1 block w-full"
                    autocomplete="published"
                    placeholder="Enter published date"
                />

        <!-- <label for="date" class="text-stone-600 text-sm font-medium">Published date</label>
        <input type="date" id="date" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
      </div>
      <div class="flex flex-col">
        <InputLabel for="ISBN" value="ISBN" />

                <TextInput
                    v-model="filteredData.isbn"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="isbn"
                    placeholder="Enter ISBN"
                />
      </div>

      <div class="flex flex-col">
        <InputLabel for="genre" value="Genre" />

                <TextInput
                    v-model="filteredData.genre"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="genre"
                    placeholder="Enter Genre"
                />
      </div>
      
    </div>

    <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
      <button class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90" @click="resetFilter">Reset</button>
      <button class="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90" @click="emit('filterData', filteredData)">Search</button>
    </div>
  </div>
</div>

</template>