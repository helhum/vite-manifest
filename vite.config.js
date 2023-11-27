import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        manifest: 'manifest.json',
        rollupOptions: {
            input: {
                'foo': 'main.js',
            },
            output: {
                dir: 'dist',
                format: 'es'
            },
        }
    },

})
