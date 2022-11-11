import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("Primary variant contains the correct label and style", async () => {
    const { getByText, getByTestId, getByRole } = render(
      <Button label="Button Title" variant="primary" />
    );

    expect(getByText("Button Title")).toBeVisible();
    expect(getByRole("button")).toHaveClass(
      "bg-hca-blue-500 text-white hover:bg-hca-blue-600"
    );
  });
});
