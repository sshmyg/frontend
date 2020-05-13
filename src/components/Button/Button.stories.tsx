import React from 'react';

import { Button } from './Button';

export default { title: 'Button' };

export const withText: React.FC<{}> = () => <Button>Hello Button</Button>;

export const withEmoji: React.FC<{}> = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
