import React from 'react';

import { Button } from './Button';

export default { title: 'Button', component: Button };

const Template = (args) => <Button {...args} />;

export const WithText = Template.bind({});

WithText.args = {
  children: 'Button text',
};

export const WithEmoji = Template.bind({});

WithEmoji.args = {
  children: (
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  ),
};
