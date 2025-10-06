import { render, screen } from '@testing-library/react';
import Typography from '../Typography'; 
import { getContainerElement } from './styles'; 

const MockContainerComponent = jest.fn((props) => {
  if (props.as) console.log(props.as);

  const Tag = props.as || 'p';
  return (
    <Tag data-testid="typography-container" {...props}>
      {props.children}
    </Tag>
  );
});

jest.mock('./styles', () => ({
  getContainerElement: jest.fn(() => MockContainerComponent),
}));

const MockedGetContainerElement = getContainerElement as jest.Mock;

describe('Typography', () => {
  afterEach(() => {
    MockedGetContainerElement.mockClear();
    MockContainerComponent.mockClear();
  });

  it('should render the children content and use "p" tag by default', () => {
    const text = 'Hello World';
    render(<Typography>{text}</Typography>);

    expect(screen.getByText(text)).toBeInTheDocument();
    
    const element = screen.getByTestId('typography-container');
    expect(element.tagName).toBe('P'); 
  });
  
  it('should pass all spread props to the Container component', () => {
    const customProps = {
      id: 'custom-id',
      'aria-label': 'descriptive-text',
    };

    render(<Typography {...customProps}>Text</Typography>);

    const element = screen.getByTestId('typography-container');
    
    expect(element).toHaveAttribute('id', 'custom-id');
    expect(element).toHaveAttribute('aria-label', 'descriptive-text');
  });
  
  it('should call getContainerElement with default element "p" and size "md"', () => {
    render(<Typography>Default</Typography>);
    expect(MockedGetContainerElement).toHaveBeenCalledWith(
      'p',    
      'md'    
    );
  });

  it('should call getContainerElement with custom "as" and "size" props', () => {
    render(<Typography as="h2" size="lg">Custom</Typography>);
    expect(MockedGetContainerElement).toHaveBeenCalledWith(
      'h2',
      'lg'
    );
  });

  
  it('should call getContainerElement with custom "as" and default "size"', () => {
    render(<Typography as="span">Span Text</Typography>);
    expect(MockedGetContainerElement).toHaveBeenCalledWith(
      'span',
      'md'
    );
  });
});