<script setup>
import { ref, computed } from 'vue';
import InputLabel from '@/Components/InputLabel.vue';

const props = defineProps({
  categories: {
    type: Object,
    required: true
  }
});

defineEmits(['updatedCategories']);

const searchQuery = ref("");
const checkedCategories = ref([]);

 const searchedEvents = computed(() => {
      return props.categories.filter((category) => {
        return (
          category.name
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
});

</script>
<template>
    <InputLabel for="category" value="Categories" />
        <!-- Dropdown menu -->
        <div id="dropdownSearch" class="z-10 bg-white rounded-lg shadow w-100 dark:bg-gray-700 mb-8">
            <div class="p-3">
              <label for="input-group-search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" v-model="searchQuery" id="input-group-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search category">
              </div>
            </div>
            <ul class="h-60 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
              <li v-for="(item, index) in searchedEvents" :key="index">
                <div class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input :id="`checkbox-item-${index}`" @change="$emit('updatedCategories', checkedCategories)" v-model="checkedCategories" type="checkbox" :value="item.id" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label :for="`checkbox-item-${index}`" class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ item.name + ', Age - ' + item.start_age + '-' + item.end_age + ', Weight - ' + item.weight }}</label>
                </div>
              </li>
              
            </ul>
        </div>
</template>