import React, { Fragment } from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <Fragment>{children}</Fragment>
);
