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
        'sky-bg': '#000000',
        'gradient-start': '#41429f',
        'gradient-end': '#080a31',
      },
      backgroundImage: {
        'sh': "url('/src/Assets/sssAssets/Home/background-home-desktop.jpg')",
        'sh-mobile': "url('/src/Assets/sssAssets/Home/background-home-mobile.jpg')",
        'sh-tablet': "url('/src/Assets/sssAssets/Home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
};