import React from 'react';

import styles from './Inner.module.css';

export const Inner: React.FC<{}> = () => {
  return <p className={styles.wrapper}>Inner page</p>;
};
