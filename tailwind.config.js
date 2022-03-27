module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'nasa': ['nasamedium', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'sss-bg': "url('/src/Assets/sssAssets/Home/background-home-desktop.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};