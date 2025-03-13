import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    // port: 3000, // Set the port to 3000
    // host: 'localhost', // Explicitly set the host
    watch: {
      usePolling: true, // Forces file watching for changes
    },
    hmr: true, // Ensures hot module replacement is enabled
  },
});