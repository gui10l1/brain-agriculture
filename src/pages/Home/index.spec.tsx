import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home screen test suites', () => {
  it('should be able to render a `Hello, world!` text', () => {
    render(<Home />);

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});