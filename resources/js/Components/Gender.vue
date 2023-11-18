<script setup>

defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

const fields = [
    {
        title: 'Male',
        value: 0
    },
    {
        title: 'Female',
        value: 1
    },
    {
        title: 'Transgender',
        value: 2
    },
    {
        title: 'All',
        value: 3
    }
];

defineEmits(['update:modelValue']);
</script>

<template> 
<div class="flex">
    <div v-for="(item, index) in fields" :key="index" class="flex items-center px-4 border border-gray-200 rounded dark:border-gray-700 mr-4">
        <input :checked="modelValue == item.value" :id="`bordered-radio-${index+1}`" type="radio" :value="item.value" @input="$emit('update:modelValue', $event.target.value)" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label :for="`bordered-radio-${index+1}`" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" v-text="item.title"></label>
    </div>
</div>
</template>