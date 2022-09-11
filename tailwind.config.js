module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#1c1c20",
        "eerie-black": "#28282c",
        "jet": "#908f96",
        "greyish": "#edeef03b",
        "cornflower": {
          300: "#7a8dec",
          400: "#6781dc"
        }
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(330px, 1fr))',
      },
    },
  },
  plugins: [],
}
