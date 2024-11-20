/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:'Poppins',
        kar:"Karma",
        robo:"Roboto Slab",
      },
      colors:{
        menuColor:'#6A6B6C',
        buttonColor:"#F5C362",
        buttonTextColor:"#190D30",
        counterColor:'#0166FF',
        onlineColor:'#07222C',
        onlineColor2:'#565A5B',
        populerColor:'#07152F',
        populerColor2:'#6A6B6C',
        starColor:"#F1C40F",
        borderColor:"#309DC1",
      },
    },
  },
  plugins: [],
}

