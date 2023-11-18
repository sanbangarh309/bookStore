<script setup>

defineProps({
    removable: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: 'green'
    }
});

</script>
<template>
<span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium rounded" :class="[ `text-${color}-800`, `bg-${color}-100`, `dark:bg-${color}-900`, `dark:text-${color}-300` ]">
    <slot />
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm bg-transparent rounded-sm" :class="[ `text-${color}-400`, `hover:bg-${color}-200`, `hover:text-${color}-900`, `dark:hover:bg-${color}-800`, `dark:hover:text-${color}-300` ]" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
      <svg v-if="removable" aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</span>
</template>