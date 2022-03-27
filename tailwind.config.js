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
      colors: {
        'sky-bg' : '#000000', 
      },
      backgroundImage: {
        'sss-bg': "url('/src/Assets/sssAssets/Home/background-home-desktop.jpg')",
        'sss-bg-mobile': "url('/src/Assets/sssAssets/Home/background-home-mobile.jpg')",
        'sss-bg-tablet': "url('/src/Assets/sssAssets/Home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
};