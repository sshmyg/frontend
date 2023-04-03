module.exports = {
  extends: ['stylelint-config-recommended'],

  rules: {
    'unit-allowed-list': ['rem', '%', 'vh', 'vw', 's', 'deg', 'fr', 'ms'],
    'no-descending-specificity': null,
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
  },
};
