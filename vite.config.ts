
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
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
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
