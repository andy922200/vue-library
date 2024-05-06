<script setup lang="ts">
import { ref, PropType, defineProps, defineEmits, computed } from 'vue'

const currentImageIndex = ref(0)

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  canCycle: {
    type: Boolean,
    default: true,
  },
})

const emits = defineEmits(['update:isOpen'])

const dialogState = computed({
  get() {
    return props.isOpen
  },
  set(value) {
    emits('update:isOpen', value)
  },
})

const closeDialog = () => {
  dialogState.value = false
}

const changeImage = (direction: -1 | 0 | 1) => {
  const newIndex = currentImageIndex.value + direction

  if (newIndex < 0) {
    currentImageIndex.value = props.canCycle ? props.images.length - 1 : 0
  } else if (newIndex >= props.images.length) {
    currentImageIndex.value = props.canCycle ? 0 : props.images.length - 1
  } else {
    currentImageIndex.value = newIndex
  }
}
</script>

<template>
  <div
    v-if="dialogState"
    class="fixed inset-0 bg-black bg-opacity-50 z-100 flex justify-center items-center"
    @click.self="closeDialog"
  >
    <div class="bg-white p-4 rounded-max max-w-lg max-h-full overflow-y-auto relative">
      <button
        class="absolute top-0 right-0 m-2 text-black bg-gray-200 hover:bg-gray-400 rounded-full p-2 hover:cursor-pointer"
        @click.self="closeDialog"
      >
        ×
      </button>
      <div class="flex justify-between items-center">
        <button
          v-show="canCycle || currentImageIndex > 0"
          class="mx-2 hover:cursor-pointer bg-blue-400 p-2 border border-blue-500"
          @click.stop="changeImage(-1)"
        >
          &lt;
        </button>
        <div class="w-full flex justify-center items-center border-2 border-indigo-600">
          <span v-if="!images[currentImageIndex]">loading......</span>
          <img :src="images[currentImageIndex]" class="w-full h-full min-w-[160px] min-h-[120px]" />
        </div>
        <button
          v-show="canCycle || currentImageIndex < images.length - 1"
          class="mx-2 hover:cursor-pointer bg-blue-400 p-2 border border-blue-500 text-white"
          @click.stop="changeImage(1)"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>
