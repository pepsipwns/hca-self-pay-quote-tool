import { render } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("Default link contains the correct label and href", async () => {
    const { getByText, getByTestId, getByRole } = render(
      <Link label="Link Title" href="/test" />
    );

    expect(getByText("Link Title")).toBeVisible();
    expect(getByTestId("HCALink")).toHaveAttribute("href", "/test");
  });

  it("Small link contains the correct label, href and style", async () => {
    const { getByText, getByTestId, getByRole } = render(
      <Link label="Link Title" href="/test" classNames="text-sm" />
    );

    expect(getByText("Link Title")).toBeVisible();
    expect(getByTestId("HCALinkLabel")).toHaveClass("text-sm");
    expect(getByTestId("HCALink")).toHaveAttribute("href", "/test");
  });
});
