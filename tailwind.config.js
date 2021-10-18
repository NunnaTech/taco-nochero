module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'raleway': ['raleway', 'sans-serif'],
      }
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
  }
}
