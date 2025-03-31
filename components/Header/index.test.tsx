import { render, screen } from "@testing-library/react";
import Header from ".";
import { RouterContext } from "../../mocks/router";

jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: () => {},
  }),
  usePathname: () => "/",
}));

test("Header component - MD sizes", () => {
  const router = {
    route: "/",
    pathname: "/",
    query: "",
    asPath: "/",
    push: async () => true,
  };

  render(
    <RouterContext.Provider value={router}>
      <Header />
    </RouterContext.Provider>
  );

  const logo = screen.getByTestId("logo-md");
  expect(logo).toBeInTheDocument();

  const menu = screen.getByTestId("menu-md");
  expect(menu).toBeInTheDocument();
});

test("Header component - XS sizes", () => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 500,
  });
  window.dispatchEvent(new Event("resize"));
  const router = {
    route: "/",
    pathname: "/",
    query: "",
    asPath: "/",
    push: async () => true,
  };

  render(
    <RouterContext.Provider value={router}>
      <Header />
    </RouterContext.Provider>
  );

  const menu = screen.getByTestId("drawerMenuButton");
  expect(menu).toBeInTheDocument();

  const logo = screen.getByTestId("logo-xs");
  expect(logo).toBeInTheDocument();

  expect(window.innerWidth).toBe(500);
});
