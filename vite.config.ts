// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
        '@app': '/src/app',
        '@api': '/src/api',
        '@assets': '/src/assets',
        '@components': '/src/components',
        '@features': '/src/features',
        '@hooks': '/src/hooks',
        '@pages': '/src/pages',
        '@router': '/src/router',
        '@store': '/src/store',
        '@types': '/src/types',
        '@applications': '/src/applications',
      },
  },
})