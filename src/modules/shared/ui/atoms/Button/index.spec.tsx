import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Button from '.';

jest.mock('./styles', () => {
  const MockContainer = jest.fn(({ children, ...props }) => (
    <button data-testid="button-container" {...props}>
      {children}
    </button>
  ));

  return {
    Container: MockContainer,
  };
});

describe('Button', () => {
  afterEach(() => cleanup());

  it('should render the children content', () => {
    const buttonText = 'Click Me';
    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick}>Test Click</Button>);

    const buttonElement = screen.getByRole('button', { name: 'Test Click' });

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the disabled prop is true', () => {
    render(
      <Button disabled onClick={jest.fn()}>
        Disabled Button
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: 'Disabled Button' });

    expect(buttonElement).toBeDisabled();

    const mockOnClick = jest.fn();
    fireEvent.click(buttonElement);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should pass all spread props (e.g., type, aria-label) to the Container component', () => {
    const customProps = {
      type: 'submit' as const,
      'aria-label': 'custom-label',
    };

    render(<Button {...customProps}>Submit</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
    expect(buttonElement).toHaveAttribute('aria-label', 'custom-label');
  });
});