<script setup>
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useForm } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import { ref, onMounted, computed } from 'vue';

const bookImage = ref(null);

const props = defineProps({
    book: {
        type: Object,
    }
});

const { book } = props;
const form = useForm({
    id: book?.id,
    title: book?.title,
    author: book?.author,
    genre: book?.genre,
    description: book?.description,
    isbn: book?.isbn,
    image: book?.image,
    published: book?.published,
    publisher: book?.publisher
});

const breadCrumbData = [{
        title: 'Books',
        link: '/books'
    }];
if (book) {
    breadCrumbData.push({
        title: book?.title,
        link: null
    });
}

onMounted(() => {
    const flatPickerObj = {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d"
    };
    
    flatpickr(".vue3-datepicker", flatPickerObj);
});

const updateBook = () => {
    let method = 'post';
    let routeObj = route('books.add.post');
    if (book) {
        routeObj = route('books.update', { id: book.id });
    }
    form[method](routeObj, {
        preserveScroll: true,
        onSuccess: () => {
            if (!book) {
                // form.reset();
            }
        },
        onError: () => {
           
        },
    });
};

const handleFile = (el) => {
    const fileSize = bookImage.value?.files?.[0].size;
    if (fileSize > 1024 * 1024) {
        el.preventDefault();
        alert('File too big (> 1MB)');
        bookImage.value = null;
        el.value = null;
    }
}

const fileUrl = computed(() => {
    if (typeof form.image === 'object' && form.image !== null) {
        return URL.createObjectURL(form.image);
    }
    if (form.image.includes('http')) {
        return form.image;
    }
    return `/files/${form.image}`;
});

const isReadOnly = route().params.t == 'view';

</script>
<template>
    <AuthenticatedLayout>
        <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <header>
            <h2 class="text-lg font-medium text-gray-900">{{ book?`Edit book`:'Add book' }}</h2>
            <Breadcrumb :breadCrumbData="breadCrumbData" />
        </header>
        <form @submit.prevent="updateBook" class="mt-6 space-y-6">
            <div>
                <InputLabel for="title" value="Title" />

                <TextInput
                    v-model="form.title"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="title"
                    placeholder="Enter title"
                />

                <InputError :message="form.errors.title" class="mt-2" />
            </div>

            <div>
                <InputLabel for="author" value="Author" />

                <TextInput
                    v-model="form.author"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="author"
                    placeholder="Enter author"
                />

                <InputError :message="form.errors.author" class="mt-2" />
            </div>

            <div>
                <InputLabel for="genre" value="Genre" />

                <TextInput
                    v-model="form.genre"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="genre"
                    placeholder="Enter genre"
                />

                <InputError :message="form.errors.genre" class="mt-2" />
            </div>

            <div>
                <InputLabel for="description" value="Description" />

                <textarea
                    v-model="form.description"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    autocomplete="description"
                    placeholder="Enter description"
                    :readonly="isReadOnly"
                />

                <InputError :message="form.errors.description" class="mt-2" />
            </div>

            <div>
                <InputLabel for="isbn" value="ISBN" />

                <TextInput
                    v-model="form.isbn"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="isbn"
                    placeholder="Enter isbn"
                />

                <InputError :message="form.errors.isbn" class="mt-2" />
            </div>

            <div>
                <InputLabel for="publisher" value="publisher" />

                <TextInput
                    v-model="form.publisher"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    autocomplete="publisher"
                    placeholder="Enter publisher"
                />

                <InputError :message="form.errors.publisher" class="mt-2" />
            </div>

            <div>
                <InputLabel for="published" value="Published date" />
                <TextInput
                    v-model="form.published"
                    type="text"
                    required
                    class="mt-1 block w-full"
                    :class="[!isReadOnly?'vue3-datepicker':'']"
                    autocomplete="published"
                    placeholder="Click to add from date..."
                    :readonly="isReadOnly"
                />

                <InputError :message="form.errors.published" class="mt-2" />
            </div>

            <div>
                <InputLabel for="book_image" value="Upload book image" />
                <TextInput
                    v-if="!isReadOnly"
                    accept="image/png, image/gif, image/jpeg"
                    type="file"
                    class="mt-1 block w-full"
                    autocomplete="published"
                    @change="handleFile" id="book_image" @input="form.image = $event.target.files[0]" ref="bookImage"
                    placeholder="Click to add from date..."
                />

                <img v-if="form.image" class="h-auto max-w-full" :src="fileUrl" alt="Loading...">
            </div>

            <div class="flex items-center gap-4" v-if="!isReadOnly">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
</div>
</div>

    </AuthenticatedLayout>
</template>