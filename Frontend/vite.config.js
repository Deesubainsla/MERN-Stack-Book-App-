import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  daisyui: {
    themes: false, // Disable all default themes, including the gray theme
  },
})
