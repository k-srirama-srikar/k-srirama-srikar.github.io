/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 0%, #1e1b4b, #0f172a)',
        'carbon': 'linear-gradient(0deg, #222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
        'dark-gradient': 'linear-gradient(135deg, #1f1f2f, #0d0d0d)'
      },
      
      gridTemplateColumns: {
        'layout': '20% 80%',
      },
  

    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
