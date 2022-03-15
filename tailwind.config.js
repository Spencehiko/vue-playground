const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      maxHeight: {
        '100-30px': 'calc(100% - 30px)',
      }
    },
  },
  variants: {
    margin: ['hover', 'first', 'last', 'before', 'after'],
    padding: ['hover', 'first', 'last'],
    display: ['before', 'after'],
    textColor: ['before', 'after', 'disabled'],
    fontSize: ['before', 'after'],
    backgroundColor: ['before', 'after'],
    cursor: ['disabled']
  },
  plugins: [],
}
