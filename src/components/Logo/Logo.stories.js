import React from 'react';

import { Logo } from './Logo';

export default { title: 'Logo' };

export const simple = () => <Logo />;

export const withSrc = () => <Logo src="http://placeimg.com/640/480/any" />;
