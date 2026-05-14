/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // এই লাইনটি নিশ্চিত করুন
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave"], // এখানে মাল্টিপল থিম রাখতে পারেন
  },
};