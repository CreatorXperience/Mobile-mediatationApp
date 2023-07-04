import { render, screen } from "@testing-library/react";
import Sample from "./Sample";

test("Sample component must render without error", () => {
  render(<Sample />);

  const Text = screen.getByText(/music/i);
  expect(Text).toBeInTheDocument();
});
``;
