const { width } = require("@fortawesome/free-brands-svg-icons/fa42Group");

module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "dark-purple": "#081A51",
          "light-white": "rgba(255,255,255,0.17)",
          "dark-gray" : "#4D4D5C",
        },
        width:{
             'calc-custom': 'calc(100% - 20px)'
        }
      },
    },
    plugins: [],
  };