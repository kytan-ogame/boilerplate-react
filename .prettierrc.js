module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@redux/(.*)$',
    '^@pages/(.*)$',
    '^@components/(.*)$',
    '^[.]',
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
};
