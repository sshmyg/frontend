import React, { ReactNode, useMemo } from 'react';

import * as styles from './Section.module.css';

interface SectionProps {
  tagName?: 'section' | 'header' | 'footer';
  className?: string;
  children?: ReactNode;
}

export const Section = ({
  children,
  tagName = 'section',
  className = '',
}: SectionProps) => {
  const CustomTag = useMemo(() => tagName, [tagName]);
  const actualizedClassName = useMemo(
    () => [styles.section, className].filter(Boolean).join(' '),
    [className],
  );

  return (
    <CustomTag data-testid="c-section" className={actualizedClassName}>
      <div className={styles.sectionInner}>{children}</div>
    </CustomTag>
  );
};
