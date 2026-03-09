import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
        environment: 'jsdom', // esto es un escenario ficticio simula un navegador
        globals: true, // esto sirve para tener una herramienta global
        setupFiles: './src/setupTests.ts', // esto se ejecuta antes de cada test para dejarlo listo
        // prepara tod0 antes de la función
    },
})
