import fluid, { extract } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", extract],
  theme: {
    fluid: ({ theme }) => ({
      defaultScreens: [theme("screens.xxs"), theme("screens.xs")],
    }),
    extend: {
      screens: {
        xxs: "20rem", // 320px
        xs: "39rem", // 624px, the lowest width needed for the card to display in full width
      },
      colors: {
        pink: "hsl(281, 83%, 54%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "gray-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
      },
      fontSize: {
        "3.5xl": "2rem",
        "5.5xl": "3.5rem",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
};
