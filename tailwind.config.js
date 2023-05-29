/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        xl: 0,
      },
    },
    screens: {
      md: '768px',
      lg: '992px',
      xl: '1296px',
    },
    lineHeight: {
      DEFAULT: '1.2',
    },

    fontSize: {
      DEFAULT: ['16px', 1.5],
      heading01: ['48px', 1.2],
      heading02: ['40px', 1.2],
      heading03: ['32px', 1.2],
      heading04: ['28px', 1.2],
      heading05: ['24px', 1.2],
      heading06: ['20px', 1.2],
      display01: ['150px', 1.2],
      display02: ['120px', 1.2],
      display03: ['80px', 1.2],
      small: ['14px', 1.5],
      tiny: ['12px', 1.5],
      'icon-large': ['80px', 1],
      'icon-medium': ['24px', 1],
      'icon-small': ['16px', 1],
    },
    fontFamily: {
      sans: ['Noto Serif TC', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'black-100': '#020202',
      'black-80': '#525252',
      'black-60': '#919191',
      'black-40': '#D1D1D1',
      'black-20': '#F2F2F2',
      primary: '#F18724',
      surface: '#F2EFE7',
    },

    extend: {
      backgroundImage: {
        logo: "url('/src/assets/images/logo.svg')",
        deco: "url('/src/assets/images/deco.png')",
        enterpriseLine1: "url('/src/assets/images/enterprise-line1.png')",
        enterpriseLine2: "url('/src/assets/images/enterprise-line2.png')",
      },
      keyframes: {
        grow: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(0)' },
          '70%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200%)' },
        },
      },
    },
  },
  plugins: [],
};
