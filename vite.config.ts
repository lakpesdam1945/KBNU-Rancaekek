import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2, // 2 years
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          getCache({
            pattern: /^https:\/\/mwcjson.vercel.app\/warta/,
            name: "warta",
          }),
        ],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ["icon-192x192.png", "icon-512x512.png", "nu.webp"],
      manifest: {
        name: "KBNU Rancaekek",
        short_name: "KBNU Rancaekek",
        description: "Majelis Wakil Cabang Nahdlatul Ulama Kecamatan Rancaekek",
        theme_color: "#ffffff",
        icons: [
          {
            src: "nu.webp",
            sizes: "1025x1025",
            type: "image/webp",
          },
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
