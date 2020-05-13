import React from 'react';

import { Logo, Section } from '@/components';

import styles from './Header.module.css';

export const Header: React.FC<{}> = () => {
  return (
    <Section tagName="header" className={styles.header}>
      <Logo />
    </Section>
  );
};
