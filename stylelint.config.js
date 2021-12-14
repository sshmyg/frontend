module.exports = {
  extends: ['stylelint-config-recommended'],

  rules: {
    'unit-allowed-list': ['rem', '%', 'vh', 'vw', 's', 'deg', 'fr', 'ms'],
    'no-descending-specificity': null,
    'block-closing-brace-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-single-line-comment'],
      },
    ],
    'at-rule-empty-line-before': 'always',
    'selector-max-id': 1,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'declaration-no-important': true,
    'color-hex-case': 'lower',
  },
};
