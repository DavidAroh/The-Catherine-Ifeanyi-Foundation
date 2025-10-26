/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sun': '#FFCC33',        // Bright Yellow/Golden Yellow - main brand color
        'sun-light': '#FFAE42',  // Yellow-Orange - accent color
        'grass': '#4F9900',      // Green/Olive Green - secondary color
        'grass-light': '#A7C75C', // Light Yellow-Green - accent color
        'silhouette': '#5C4033', // Dark Brown - accent color
        'foundation-text': '#8B4513', // Medium Brown/Sepia - foundation text color
      }
    },
  },
  plugins: [],
};
