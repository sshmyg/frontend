import React from 'react';

import styles from './Block.module.css';

export const Block: React.FC<{}> = ({ children }) => {
  return (
    <div data-testid="c-block" className={styles.block}>
      {children}
    </div>
  );
};
