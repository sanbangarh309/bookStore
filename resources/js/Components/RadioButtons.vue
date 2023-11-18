<script setup>
defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
    fields: {
        type: Array,
        required: true,
    },
    type: {
        type: Number,
        required: true
    }
});

defineEmits(['update:modelValue']);

// const fields = [
//     {
//         title: 'Active',
//         value: 1,
//         color: 'teal'
//     },
//     {
//         title: 'Inactive',
//         value: 0,
//         color: 'yellow'
//     }
// ];

</script>
<template>
    <div class="flex flex-wrap">
    <div class="flex items-center mr-4" v-for="(item, index) in fields" :key="index">
        <input :id="`${item.color}-radio-${type}`" :checked="modelValue==item.value" type="radio" :value="item.value" :name="`colored-radio-${type}`" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" :class="[ `text-${item.color}-600`, `focus:ring-${item.color}-500`, `dark:focus:ring-teal${item.color}-600` ]" @input="$emit('update:modelValue', $event.target.value)">
        <label :for="`${item.color}-radio-${type}`" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{item.title}}</label>
    </div>
</div>
</template>