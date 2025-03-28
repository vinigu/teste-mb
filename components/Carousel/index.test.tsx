import { render, screen } from '@testing-library/react';
import Carousel from './index';

describe('Carousel', () => {
  const children = (
    <>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </>
  );

  it('should render slides correctly', () => {
    render(<Carousel>{children}</Carousel>);
    const slide1 = screen.getByText('Slide 1');
    const slide2 = screen.getByText('Slide 2');
    const slide3 = screen.getByText('Slide 3');
    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
    expect(slide3).toBeInTheDocument();
  });

  it('should display the correct number of slides', () => {
    render(<Carousel slidesToShow={2}>{children}</Carousel>);
    const slide1 = screen.getByText('Slide 1');
    const slide2 = screen.getByText('Slide 2');
    const slide3 = screen.getByText('Slide 3');
    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
    expect(slide3).toBeInTheDocument();
    expect(screen.queryByText('Slide 4')).not.toBeInTheDocument();
  });
});
