module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(330px, 1fr))',
      },
    },
  },
  plugins: [],
}
