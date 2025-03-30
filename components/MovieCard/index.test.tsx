import { render, screen } from "@testing-library/react";
import MovieCard from ".";

describe("Movie Card component", () => {
  it("should render component correctly", () => {
    render(
      <MovieCard
        id={1}
        title="Teste"
        path="https://example.com/image.jpg"
=        description="Descrição de teste"
        vote_average={4.5}
        isAdult={true}
        href="#"
      />
    );

    const image = screen.getByRole("img");
    const title = screen.getByTestId("title");
    const genre = screen.getByTestId("genre-id");
    const description = screen.getByTestId("description");
    const rating = screen.getByTestId("hour_meter");
    const adultContent = screen.getByTestId("adult_content");

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(adultContent).toBeInTheDocument();
    expect(title.innerHTML).toBe("Teste");
    expect(genre.innerHTML).toBe("Ação");
    expect(description.innerHTML).toBe("Descrição de teste");
    expect(rating.innerHTML).toBe("4.5");
    expect(adultContent.innerHTML).toBe("Conteúdo adulto");
  });
});
