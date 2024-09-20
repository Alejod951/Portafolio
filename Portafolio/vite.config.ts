import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Hace que el servidor sea accesible en la red
    port: 3000,      // Puedes cambiar el puerto si lo deseas
    open: true,      // Abre el navegador automáticamente
  },
});
