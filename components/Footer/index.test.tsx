import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  it('should render component correctly', () => {
    render(<Footer />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});
