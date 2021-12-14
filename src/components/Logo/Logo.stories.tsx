import React from 'react';

import { Logo } from './Logo';

export default {
  Default: () => <Logo />,

  WithSrc: () => <Logo src="http://placeimg.com/640/480/any" />,
};
