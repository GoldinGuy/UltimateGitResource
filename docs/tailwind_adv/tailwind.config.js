module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: [
      'hover',
      'focus',
      'active',
      'odd',
    ],
    display: ['responsive'],
    textColor: [
      'focus-within',
      'hover',
      'active',
    ],
    placeholderColor: ['focus'],
    borderColor: ['focus', 'hover'],
    boxShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
