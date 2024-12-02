/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        zentry: ['zentry', 'sanf-serif'],
        general: ['general', 'sanf-serif'],
        'circular-web': ['circular-web', 'sanf-serif'],
        'robert-medium': ['robert-medium','sanf-serif'],
        'robert-regular': ['robert-regular','sanf-serif'],
      },
      colors: {
        blue: {
          50: '#f0f9ff',
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        voilet:{
          300: "#481ee0",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};