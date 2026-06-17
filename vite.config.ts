import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Leave framer-motion unpinned so the LazyMotion dynamic import
          // can split domAnimation into its own deferred chunk.
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils'))
            return
          if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/'))
            return 'react'
          if (id.includes('@radix-ui')) return 'radix'
          return 'vendor'
        },
      },
    },
  },
})
