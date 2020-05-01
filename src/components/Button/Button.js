import React, { useMemo } from 'react';

import styles from './Button.module.css';

export const Button = ({ className, type = 'button', ...restProps }) => {
  const actualizedClassName = useMemo(
    () => [styles.button, className].filter(Boolean).join(' '),
    [className],
  );

  return (
    <button
      data-testid="c-button"
      {...restProps}
      type={type}
      className={actualizedClassName}
    />
  );
};
