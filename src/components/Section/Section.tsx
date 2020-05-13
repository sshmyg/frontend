import React, { useMemo } from 'react';

import styles from './Section.module.css';

const tags = ['section', 'header', 'footer'] as const;

interface SectionProps {
  tagName?: typeof tags[number];
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  tagName = 'section',
  className = '',
}) => {
  const CustomTag = useMemo(() => tagName, [tagName]);
  const actualizedClassName = useMemo(
    () => [styles.section, className].filter(Boolean).join(' '),
    [className],
  );

  return (
    // TODO: fix ts igonore
    // @ts-ignore
    <CustomTag data-testid="c-section" className={actualizedClassName}>
      <div className={styles.sectionInner}>{children}</div>
    </CustomTag>
  );
};
