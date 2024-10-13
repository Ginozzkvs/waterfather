// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Lao', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
