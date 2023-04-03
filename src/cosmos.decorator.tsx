import React, { Fragment, ReactNode } from 'react';

interface DecoratorProps {
  children: ReactNode;
}

export default function Decorator({ children }: DecoratorProps) {
  return (
    <Fragment>
      <style>
        {`
          #root {
            min-width: 100%;
          }
        `}
      </style>
      <div style={{ padding: '1.25rem' }}>{children}</div>
    </Fragment>
  );
}
