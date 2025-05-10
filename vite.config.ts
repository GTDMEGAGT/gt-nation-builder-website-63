import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [
    react(),
    mode === 'development' && componentTagger()
  ].filter(Boolean),
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  
  server: {
    host: true, // Listen on all interfaces
    port: 8080,
    strictPort: true
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  
  optimizeDeps: {
    include: ['@vercel/analytics/react'] // Include analytics in optimization
  }
}));