import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from './index';

describe('<Button />', () => {
  it('should render Button', () => {
    const { container } = render(<Button />);
    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });

  it('should render Button type button by default', () => {
    const { container } = render(<Button />);
    const button = container.querySelector('button');

    expect(button.type).toBe('button');
  });

  it('should render Button type submit', () => {
    const { container } = render(<Button type="submit" />);
    const button = container.querySelector('button');

    expect(button.type).toBe('submit');
  });

  it('should render Button type reset', () => {
    const { container } = render(<Button type="reset" />);
    const button = container.querySelector('button');

    expect(button.type).toBe('reset');
  });

  it('should render Button with text', () => {
    const testText = 'test text';
    const { getByText } = render(<Button>{testText}</Button>);
    const button = getByText(testText);

    expect(button).toBeInTheDocument();
  });

  it('should render Link', () => {
    const { container } = render(<Button elementType="a" />);
    const button = container.querySelector('a');

    expect(button).toBeInTheDocument();
  });

  it('should onClick works', () => {
    const handleClick = jest.fn();

    const { container } = render(<Button onClick={handleClick} />);
    const button = container.querySelector('button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should matches the snapshot', () => {
    const testText = 'test text for snapshot';
    const tree = renderer.create(<Button>{testText}</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
