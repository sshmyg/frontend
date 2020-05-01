import React, { useMemo } from 'react';

import styles from './Section.module.css';

export const Section = ({ children, tagName = 'section', className = '' }) => {
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
