/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      theraplan: '#0693e3',
      black: '#100c08',
      white: '#ffffff',
      lightGrey: '#868686',
      gold: '#CABF85',
      whiteCalm: '#F2F2F2',
      transparent :  'transparent',
      primaryText: 'rgb(232,234,237)',
      secondaryText: 'rgb(154,160,166)',
      cancelRed: '#990F02',
      blackClear: 'rgb(0,0,0,0.2)',
      linkBlue: 'rgb(138,180,248)',
    },

    screens: {
      'phone': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
 
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        fadeIn: {
          '0%':  {opacity: '0', visibility: 'hidden'},
          '100%':  {opacity: '1', visibility: 'visible'}
        },
        fadeOut: {
          '0%':  {opacity: '1', visibility: 'visible'},
          '100%':  {opacity: '0', visibility: 'hidden', display: 'hidden'}
        },
        slideIn: {
          '0%': {transform: 'translateY(-300px)', animationtimingfunction: 'ease-out'},
          '60%': {transform: 'translateY(-10px)', animationtimingfunction: 'ease-in'},
          '80%': {transform: 'translateY(10px)', animationtimingfunction: 'ease-out'},
          '100%': {transform: 'translateY(0px)', animationtimingfunction: 'ease-in'}
        },
        slideOut: {
          '0%': {transform: 'translateY(0px)', animationtimingfunction: 'ease-out'},
          '50%': {transform: 'translateY(-50px)', animationtimingfunction: 'ease-in'},
          '100%': {transform: 'translateY(-300px)', animationtimingfunction: 'ease-in'}
        },
        spinRight: {
          '0%': {transform: 'rotate(180deg)'},
          '100%': {transform: 'rotate(0deg)'},         
        },
        spinLeft: {
          '0%': {transform: 'rotate(-180deg)'},
          '100%': {transform: 'rotate(0deg)'},         
        }
      },

      animation: {
        fadeIn: 'fadeIn .2s',
        fadeInSlow: 'fadeIn .8s',
        slideIn: 'slideIn .4s linear',
        slideInFadeIn: 'fadeIn .3s, slideIn .3s linear',
        fadeOut: 'fadeOut .2s ease-in-out',
        slideOut: 'slideOut .4s linear',
        slideOutFadeOut: 'fadeOut .3s, slideOut .3s linear',
        spinRight: 'spinRight .4s',
        spinLeft: 'spinLeft .4s',
      }  
    },

    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      dark: '0 2px 5px 0px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      none: '0 0 #0000',
    },
    darkMode: 'class',
    important: true,
  },
  plugins: [],
}

