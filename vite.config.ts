import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceder desde la red local
    port: 3100, // Puedes cambiar el puerto si es necesario
  },
});