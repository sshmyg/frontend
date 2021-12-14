import React from 'react';

import { Logo, Section } from '@/components';

import styles from './Header.module.css';

export const Header = () => (
  <Section tagName="header" className={styles.header}>
    <Logo />
  </Section>
);
