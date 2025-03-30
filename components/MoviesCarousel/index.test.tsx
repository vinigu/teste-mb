import { render, screen } from "@testing-library/react";
import MovieCarousel from ".";
import { IMovie } from "../../types/Movie";

const movies: IMovie[] = [
  {
    id: 1,
    title: "Movie 1",
    poster_path: "/path/to/poster1.jpg",
    genre_ids: [28, 12],
    overview: "Overview of Movie 1",
    vote_average: 8.5,
    adult: false,
  },
  {
    id: 2,
    title: "Movie 2",
    poster_path: "/path/to/poster2.jpg",
    genre_ids: [16, 35],
    overview: "Overview of Movie 2",
    vote_average: 7.2,
    adult: false,
  },
];

describe("Movies Carousel Component", () => {
  it("should render component correctly", () => {
    render(<MovieCarousel data={movies} />);

    const carousel = screen.getByTestId("MovieCarousel");

    expect(carousel).toBeInTheDocument();
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });
});
