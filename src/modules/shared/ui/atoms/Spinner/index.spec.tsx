import { render } from '@testing-library/react';
import Spinner from '../Spinner';
import { MoonLoader } from 'react-spinners';

jest.mock('react-spinners', () => ({
  MoonLoader: jest.fn((props) => (
    <div data-testid="mock-moon-loader" {...props} />
  )),
}));

const MockedMoonLoader = MoonLoader as jest.Mock;

describe('Spinner', () => {
  afterEach(() => {
    MockedMoonLoader.mockClear();
  });

  it('should render the MoonLoader component', () => {
    render(<Spinner size="small" />);

    expect(MockedMoonLoader).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct default color', () => {
    render(<Spinner size="small" />);

    expect(MockedMoonLoader).toHaveBeenCalledWith(
      expect.objectContaining({
        color: '#4CAF50',
      }),
      undefined,
    );
  });

  it('should pass size 30 when size prop is "small"', () => {
    render(<Spinner size="small" />);

    expect(MockedMoonLoader).toHaveBeenCalledWith(
      expect.objectContaining({
        size: 30,
      }),
      undefined,
    );
  });


  it('should pass size 60 when size prop is "large"', () => {
    render(<Spinner size="large" />);
    expect(MockedMoonLoader).toHaveBeenCalledWith(
      expect.objectContaining({
        size: 60,
      }),
      undefined,
    );
  });
});