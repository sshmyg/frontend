import React from 'react';

import { Button } from './Button';

export default {
  Default: () => <Button>Hello Button</Button>,

  WithChildren: () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ),
};
