import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Replace Vue plugin with React plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // React plugin instead of Vue
})
