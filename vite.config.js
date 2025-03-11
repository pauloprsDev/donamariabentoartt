import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'deployment-message',
      buildStart() {
        console.log('\x1b[36m%s\x1b[0m', 'Enviando mensagem para deploy no GitHub Pages...');
      },
    }
  ],
  base: '/donamariabentoart/',
})
