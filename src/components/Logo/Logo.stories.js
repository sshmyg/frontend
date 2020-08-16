import React from 'react';

import { Logo } from './Logo';

export default { title: 'Logo', component: Logo };

const Template = (args) => <Logo {...args} />;

export const WithText = Template.bind({});

export const WithSrc = Template.bind({});

WithSrc.args = {
  src: 'http://placeimg.com/640/480/any',
};
