import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders wrong text", () => {
  render(<App />);
  const linkElement = screen.getByText(/NAO EXISTE ESSE TEXTO/i);
  expect(linkElement).toBeInTheDocument();
});
