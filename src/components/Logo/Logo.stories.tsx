import React from 'react';

import { Logo } from './Logo';

export default { title: 'Logo' };

export const simple: React.FC<{}> = () => <Logo />;

export const withSrc: React.FC<{}> = () => (
  <Logo src="http://placeimg.com/640/480/any" />
);
