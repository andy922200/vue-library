module.exports = {
  ignoreFiles: ['node_modules/*', 'src/assets/**', 'build/**'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-scss',
  ],
  overrides: [
    {
      files: ['**/*.(css|scss|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-class-pattern': null,
    'max-nesting-depth': 6,
    'function-name-case': null,
    'selector-id-pattern': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension-blacklist': null,
    'scss/at-import-partial-extension': null,
    'scss/no-global-function-names': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-max-compound-selectors': 6,
    'declaration-block-semicolon-newline-after': null,
    'keyframes-name-pattern': null,
    'custom-property-no-missing-var-function': null,
    'color-function-notation': 'legacy',
    'selector-no-qualifying-type': null,
    'max-line-length': null,
    'alpha-value-notation': 'number',
    'no-descending-specificity': null,
    'import-notation': 'string',
  },
}
