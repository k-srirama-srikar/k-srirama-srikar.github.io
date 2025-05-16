module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
    fontFamily: {
        outfit: ['Outfit', 'sans-serif']
    }
    },
    backgroundImage: {
    'hero-gradient': 'radial-gradient(circle at 50% 0%, #1e1b4b, #0f172a)',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};