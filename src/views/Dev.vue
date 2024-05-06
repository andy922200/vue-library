<script lang="ts" setup>
import { ref } from 'vue'
import ImageDialog from '@/components/ImageDialog.vue'

const openImageDialog = ref(false)
</script>

<template>
  <h1>Dev Page</h1>
  <button @click="() => (openImageDialog = true)">Open Image Dialog</button>
  <ImageDialog
    v-model:is-open="openImageDialog"
    :images="[
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400/0000FF/808080',
      'https://via.placeholder.com/600x400/FF0000/FFFFFF',
    ]"
  />
</template>
