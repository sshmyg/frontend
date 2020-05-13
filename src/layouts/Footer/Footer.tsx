import React from 'react';

import { Section } from '@/components';

import styles from './Footer.module.css';

export const Footer: React.FC<{}> = () => {
  return (
    <Section tagName="footer" className={styles.footer}>
      Footer
    </Section>
  );
};
