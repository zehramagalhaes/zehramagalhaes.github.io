module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#C9D1D9',
        accent: '#F3E16B',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};