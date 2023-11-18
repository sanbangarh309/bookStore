<template>
    <button class="group rounded-2xl h-10 w-32 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
        <slot/>
        <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
        </div>
    </button>
</template>