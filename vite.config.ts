import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Vercel-required settings
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['@vercel/analytics/react'] // Only if using Vercel Analytics
    }
  },

  // Your existing customizations
  server: {
    host: "::", // Listen on all IPv6 interfaces
    port: 4174,
    strictPort: true // Prevent fallback to other ports
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger() // Conditional plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Optional optimization for Vercel
  optimizeDeps: {
    exclude: ['@babel/types', 'postcss-selector-parser'] // Reduce build size
  }
}));