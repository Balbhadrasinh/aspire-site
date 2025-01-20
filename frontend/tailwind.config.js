module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
        
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1140px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',

      '4xl': '1420px',

      // => @media (min-width: 1536px) { ... }
     
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dmSans)"],
      },
      dropShadow: {
        '3xl': '0 0 20px rgba(0,0,0,0.10) ',
      },
      boxShadow:{
        'card':' 0px 0px 18px 4px rgba(82,82,82,0.10);',
      } ,
      inset: {
        '17': '68px',
        '26': '104px'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        "webstories": 'webstories 10s linear infinite',

      },
      borderColor: {
        buttonBlue: "#015eea",
      },
      textColor: {
        buttonBlue: "#015eea",
        para: "#525252",
        yellowColor: "#ff980b",
        yearsYellow: "#ff980b",
        redVarient: "#f25767",
        darkBlue: "#015eea",
        headingBlue: "#011d45",
        topColor: "#00c0fa",
        darkNavyBlue: "#011d45"
      },
      backgroundColor: {
        buttonBlue: "#015eea",
        redVarient: "#f25767",
        darkBlue: "#015eea",
        darkNavyBlue: "#011d45"
      },
      keyframes: {
        webstories: {
          '0%': { transform: 'translate(0 , 0)' },
          '100%': { transform: 'translate(-100% , 0)' },
        },
      },
    },
  },
}
