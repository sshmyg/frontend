import React, { Fragment } from 'react';

export default function Decorator({ children }) {
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
