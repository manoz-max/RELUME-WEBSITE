// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage:
          'linear-gradient(to bottom right, orange, red, purple)',
      },
      screens: {
        xs: '480px', // Add custom screen size
      },
    },
  },
};
