import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Figram Pet Photos ",
        short_name: "Figram",
        description: "Where you can find beautiful pets",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/dogs-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/dogs-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp(
              "https://(res.cloudinary.com|images.unsplash.com)"
            ),
            handler: "CacheFirst",
            options: {
              cacheName: "images",
            },
          },
          {
            urlPattern: new RegExp("https://petgram-server-f7447.vercel.app"),
            handler: "NetworkFirst",
            options: {
              cacheName: "api",
            },
          },
        ],
      },
    }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
});
