import { FavoriteProvider } from "@contexts/Favorite";
import { render, screen } from "@testing-library/react";

import MovieCard from ".";

describe("Movie Card component", () => {
  it("should render component correctly", () => {
    render(
      <FavoriteProvider>
        <MovieCard
          id={1}
          title="Teste"
          path="https://example.com/image.jpg"
          description="Descrição de teste"
          vote_average={4.5}
          isAdult={true}
          href="#"
        />
      </FavoriteProvider>
    );

    const image = screen.getByTestId("movie-image");
    const title = screen.getByTestId("title");
    const description = screen.getByTestId("description");
    const rating = screen.getByTestId("rating");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg"); // Validação adicional
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(title.innerHTML).toBe("Teste");
    expect(description.innerHTML).toBe("Descrição de teste");
  });
});
