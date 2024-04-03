import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  base: 'vite-vanilla-so-scanner',
  build:{
    target: 'esnext',
    outDir: 'docs'
  }
})