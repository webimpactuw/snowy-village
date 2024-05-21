import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   target: 'esnext',
  //   rollupOptions: {
  //     // https://rollupjs.org/configuration-options/
  //     input: [
  //       "index.html",
  //       "src/main.tsx",
  //       "src/index.css",
  //     ]
  //   },
  // },
  base: "/snowy-village/"
})
