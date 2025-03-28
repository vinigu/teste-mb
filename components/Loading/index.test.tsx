import { render, screen } from "@testing-library/react";
import Loading from ".";
import "@testing-library/jest-dom";

describe("Loading Component", () => {
  it("should render component correctly", () => {
    render(<Loading />);

    const loading = screen.getByTestId("loading");
    const textLoading = screen.getByTestId("text-loading");

    expect(loading).toBeInTheDocument();
    expect(textLoading).toBeInTheDocument();

    expect(textLoading).toHaveTextContent("Carregando...");
  });
});
