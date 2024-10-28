import { ReactNode } from 'react';

import * as styles from './Block.module.css';

interface BlockProps {
  children: ReactNode;
}

export const Block = ({ children }: BlockProps) => {
  return (
    <div data-testid="c-block" className={styles.block}>
      {children}
    </div>
  );
};
