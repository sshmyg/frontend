import React from 'react';

import { render, fireEvent } from '@/test-utils';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render Button', () => {
    // TODO: types
    // @ts-ignore
    const { getByTestId } = render(<Button />);
    const button = getByTestId('c-button');

    expect(button).toBeInTheDocument();
  });

  it('should render Button type button by default', () => {
    // @ts-ignore
    const { getByTestId } = render(<Button />);
    const button = getByTestId('c-button');
    // @ts-ignore
    expect(button.type).toBe('button');
  });

  it('should render Button type submit', () => {
    // @ts-ignore
    const { getByTestId } = render(<Button type="submit" />);
    const button = getByTestId('c-button');
    // @ts-ignore
    expect(button.type).toBe('submit');
  });

  it('should render Button type reset', () => {
    // @ts-ignore
    const { getByTestId } = render(<Button type="reset" />);
    const button = getByTestId('c-button');

    // @ts-ignore
    expect(button.type).toBe('reset');
  });

  it('should render Button with text', () => {
    const testText = 'Hello world';
    // @ts-ignore
    const { getByText } = render(<Button>{testText}</Button>);
    const button = getByText(testText);

    expect(button).toBeInTheDocument();
  });

  it('should onClick works', () => {
    const handleClick = jest.fn();

    // @ts-ignore
    const { getByTestId } = render(<Button onClick={handleClick} />);
    const button = getByTestId('c-button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
