module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montaga']
      }
    }
  },
  daisyui: {
    themes: ['cupcake']
  },
  plugins: [require('daisyui')]
};
