/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#1c1c20",
        "eerie-black": "#28282c",
        "jet": "#bcbbc3",
        "greyish": "#edeef03b",
        "bar": "#49494c",
      },
      fontFamily: {
        sans: ['Rubik', "sans-serif"]
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(330px, 1fr))',
      },
    },
  },
  plugins: [],
}


