<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from './store/modules/main'
import { LayoutLanguages, Locales } from './plugins/i18n/config/locales'

const mainStore = useMainStore()
const { locale } = useI18n()
const selectedLanguageModel = computed({
  get() {
    return mainStore.selectedLanguage
  },
  set(value: Locales) {
    locale.value = value
    mainStore.setLanguage(value)
  },
})
</script>

<template>
  <select v-model="selectedLanguageModel">
    <option v-for="list in LayoutLanguages" :key="list.param" :value="list.param">
      {{ list.title }}
    </option>
  </select>
  <!-- render route here -->
  <router-view></router-view>
</template>
