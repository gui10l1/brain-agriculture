import { render } from "@testing-library/react";
import If from ".";

describe('If', () => {
  it('should render children when condition is true', () => {
    const { getByText } = render(
      <If condition={true}>
        <div>Content</div>
      </If>
    );

    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should not render children when condition is false', () => {
    const { queryByText } = render(
      <If condition={false} otherwise={<div>Otherwise</div>}>
        <div>Content</div>
      </If>
    );

    expect(queryByText('Content')).not.toBeInTheDocument();
  });

  it('should render otherwise content when condition is false and otherwise prop is provided', () => {
    const { getByText } = render(
      <If condition={false} otherwise={<div>Otherwise Content</div>}>
        <div>Content</div>
      </If>
    );
    expect(getByText('Otherwise Content')).toBeInTheDocument();
    expect(() => getByText('Content')).toThrow();
  });

  it('should render null when condition is false and otherwise prop is not provided', () => {
    const { container } = render(
      <If condition={false}>
        <div>Content</div>
      </If>
    );
    expect(container.firstChild).toBeNull();
  });
});