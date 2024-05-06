import { defineConfig, presetUno, presetAttributify, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  transformers: [transformerDirectives()],
})
