import { resolve } from 'path'
export default {
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'src/pets.html'),
      },
    },
  },
}
