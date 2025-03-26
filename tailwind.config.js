
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { surface: "#121212",
        primary: "#0ea5bf",
        secondary: "#08c19f",
        tertiary: "#252525",
        "text-primary": "#ffffff",
        "text-secondary": "#ffffffb2",
        "text-tertiary": "#ffffff",

        light: {
          surface: "#F2F4FA",
          primary: "#6A11CB",
          secondary: "#2575FC",
          tertiary: "#009990",
          "text-primary": "#404040",
          "text-secondary": "#757f9a",
          "text-tertiary": "#ffffff",
        },
        dark: {
          surface: "#121212",
          primary: "#0ea5bf",
          secondary: "#08c19f",
          tertiary: "#252525",
          "text-primary": "#ffffff",
          "text-secondary": "#ffffffb2",
          "text-tertiary": "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
