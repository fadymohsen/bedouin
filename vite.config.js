import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  homepage: 'https://bedouintrails.com',
  base: "/",
  plugins: [
    react(),
  ],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-icons', 'swiper', 'lucide-react'],
          'i18n-vendor': ['react-i18next', 'i18next'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    cssMinify: true,
    sourcemap: false,
    reportCompressedSize: true,
    input: {
      main: '/index.html'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'swiper', 'react-i18next'],
    exclude: ['big-library']
  }
})
