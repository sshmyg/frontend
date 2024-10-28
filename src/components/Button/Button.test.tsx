import { render, userEvent } from '@/test-utils';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render Button', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('c-button');

    expect(button).toBeInTheDocument();
  });

  it('should render Button type button by default', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('c-button') as HTMLButtonElement;

    expect(button.type).toBe('button');
  });

  it('should render Button type submit', () => {
    const { getByTestId } = render(<Button type="submit" />);
    const button = getByTestId('c-button') as HTMLButtonElement;

    expect(button.type).toBe('submit');
  });

  it('should render Button type reset', () => {
    const { getByTestId } = render(<Button type="reset" />);
    const button = getByTestId('c-button') as HTMLButtonElement;

    expect(button.type).toBe('reset');
  });

  it('should render Button with text', () => {
    const testText = 'Hello world';

    const { getByText } = render(<Button>{testText}</Button>);
    const button = getByText(testText);

    expect(button).toBeInTheDocument();
  });

  it('should onClick works', async () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button onClick={handleClick} />);
    const button = getByTestId('c-button');

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
