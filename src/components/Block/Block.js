import React from 'react';

import styles from './Block.module.css';

export const Block = ({ children }) => (
  <div data-testid="c-block" className={styles.block}>
    {children}
  </div>
);
