/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container:{
      padding:{
        DEFAULT:'15px'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1400px",
    },
    fontFamily:{
      primary:"DM Serif Display",
      secondary:"Jost"
    },
    backgroundImage:{
      home:'url(./assets/hero/bg.jpg)'
    },
    extend: {   
      colors:{
        primary:{
          DEFAULT:'#292f36',
          hover:'#343e4a'
        },
        secondary:'#4d5053',
        accent:{
          DEFAULT:'#cda274',
          secondary:'#f4f0ec',
          hover:'#b88c5d'
        }
      }
    },
   
  },
  plugins: [],
};