import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "@components": path.resolve(__dirname, "/src/components"),
      "@pages": path.resolve(__dirname, "/src/pages"),
      "@routes": path.resolve(__dirname, "/src/routes"),
      "@constants": path.resolve(__dirname, "/src/constants"),
      "@utils": path.resolve(__dirname, "/src/utility"),
      "@assets": path.resolve(__dirname, "/src/assets"),
      "@context": path.resolve(__dirname, "/src/context"),
      "@services": path.resolve(__dirname, "/src/services"),
      "@slice": path.resolve(__dirname, "/src/redux/slices"),
    },
  },
  define: {
    VITE_VERCEL_ENV: process.env.VITE_VERCEL_ENV,
    VITE_RAZORPAY_KEY_ID: process.env.VITE_RAZORPAY_KEY_ID,
    VITE_RAZORPAY_KEY_SECRET: process.env.VITE_RAZORPAY_KEY_SECRET,
  },
});
