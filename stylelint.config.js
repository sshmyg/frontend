module.exports = {
  extends: ['stylelint-config-recommended'],

  rules: {
    // 'unit-whitelist': ['rem', '%', 'vh', 'vw', 's', 'deg', 'fr', 'ms'],
    'no-descending-specificity': null,
    'block-closing-brace-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-single-line-comment'],
      },
    ],
  },
};
