import { useMemo, ButtonHTMLAttributes } from 'react';

import * as styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  type = 'button',
  ...restProps
}: ButtonProps) => {
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
