import { cleanup, render, screen } from '@testing-library/react';
import Input from '.';

jest.mock('./styles', () => {
  const MockContainer = jest.fn(({ ...props }) => (
    <input data-testid="input-container" {...props} />
  ));

  return {
    Container: MockContainer,
  };
});

describe('Input', () => {
  afterEach(() => cleanup());

  it('should intercept onChange events and call the provided onChange function', () => {
    const mockOnChange = jest.fn();
    render(<Input type="text" onChange={mockOnChange} value="test-value" />);
    const inputElement = screen.getByRole('textbox');

    // Simulate an onChange event
    const event = { target: { value: 'new-value' } };
    inputElement.dispatchEvent(new Event('change', { bubbles: true }));
    mockOnChange(event);
    expect(mockOnChange).toHaveBeenCalledWith(event);
  });

  it('should pass all spread props (e.g., type, aria-label, onChange, value) to the Container component', () => {
    const customProps = {
      placeholder: 'my input',
      type: 'text' as const,
      'aria-label': 'custom-label',
      onChange: () => {},
      value: 'my-value',
    };

    render(<Input {...customProps} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('aria-label', 'custom-label');
    expect(inputElement).toHaveAttribute('value', 'my-value');
  });
});