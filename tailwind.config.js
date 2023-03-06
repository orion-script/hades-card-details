/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        leftDesktop: "url('/src/assets/bg-main-desktop.png')",
        leftMobile: "url('/src/assets/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
