<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import Categories from '@/Components/Home/Categories.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import FlashMesssage from '@/Components/FlashMesssage.vue';

const props = defineProps({
    event: {
        type: Object,
        required: true
    }
});

const form = useForm({
    phone: "",
    categories: []
});

const submit = () => {
    form.post(route('events.register', { eventId: props.event.id }), {
        onFinish: () => form.reset('phone', 'categories'),
    });
};

const updatedCategories = (selectedCategories) => {
    form.categories = selectedCategories;
    console.log('form', form);
}

const breadCrumbData = [];
if (props.event) {
    breadCrumbData.push({
        title: 'Events',
        link: '/'
    });
}

</script>
<template>
<div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <FlashMesssage></FlashMesssage>
    <Breadcrumb :breadCrumbData="breadCrumbData" />
    <div class="flex justify-center">
        <img class="rounded-t-lg" :src="`/files/${event.cover_photo}`" alt="" />
    </div>
    <div class="p-5 flex justify-center">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ event.name }}</h5>
            <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> -->
            <!-- <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> -->
        </div>

<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
  <form @submit.prevent="submit">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Enter registration details</h5>
        <div class="my-2">
                <InputLabel for="phone" value="Phone" />

                <TextInput
                    id="phone"
                    type="number"
                    class="mt-1 block w-full"
                    v-model="form.phone"
                    required
                    autofocus
                    autocomplete="phone"
                    placeholder="Enter phone number"
                />

                <InputError class="mt-2" :message="form.errors.phone" />
        </div>
        <div class="my-2">
          <Categories :categories="event.categories" @updatedCategories="updatedCategories" />
          <InputError class="mt-2" :message="form.errors.categories" />
        </div>
        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          Register
        </PrimaryButton>
   
    </form>
</div>

</div>

</template>