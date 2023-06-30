import { render, screen } from "@testing-library/react";

import Sample from "./Sample";

describe("Sample", () => {
  test("Sample component must render without error", () => {
    render(<Sample />);

    const Text = screen.getByText("Music");
    expect(Text).toBeInTheDocument();
  });
});
