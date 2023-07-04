import { render, screen } from "@testing-library/react";
import Fetcher from "./FetchQuery";

test("Query must render without parameters", async () => {
  render(<Fetcher />);

  const Data = await screen.findByRole("listitem");
  expect(Data).toBeInTheDocument();
});
