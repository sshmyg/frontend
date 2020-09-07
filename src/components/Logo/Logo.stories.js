import React from 'react';

import { Logo } from './Logo';

export default { title: 'Logo', component: Logo };

export const WithText = () => <Logo />;

export const WithSrc = () => <Logo src="http://placeimg.com/640/480/any" />;
