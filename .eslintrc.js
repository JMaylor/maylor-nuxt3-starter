module.exports = {
  extends: ['@antfu', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  settings: {
    tailwindcss: {
      officialSorting: true,
      prependCustom: true,
    },
  },
}
