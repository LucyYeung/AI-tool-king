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
      },
    },
  },
  plugins: [],
};
