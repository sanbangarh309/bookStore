<script setup>
import EventDetail from '@/Components/Home/EventDetail.vue';

defineProps({
    event: {
        type: Object,
        required: true
    },
    categories: {
        type: Object,
        required: true
    },
});

</script>
<template>
    <EventDetail :event="event" />
</template>