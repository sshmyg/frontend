import React from 'react';

import { Button } from './Button';

export default { title: 'Button', component: Button };

export const WithText = () => <Button>Button text</Button>;

export const WithEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
