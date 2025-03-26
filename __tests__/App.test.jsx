import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/routes/Router";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

vi.mock("../routes/Router", () => ({
  __esModule: true,
  default: () => <Router />,
}));

vi.mock("../components/Header/Header", () => ({
  __esModule: true,
  default: () => <Header />,
}));

vi.mock("../components/Footer/Footer", () => ({
  __esModule: true,
  default: () => <Footer />,
}));

describe("App Component", () => {
  test("renders Header, Router, and Footer components", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // Check if Header component is rendered
    expect(
      screen.getByRole("button", { name: /Get Started/i }),
    ).toBeInTheDocument();
  });
});
