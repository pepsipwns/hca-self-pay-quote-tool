import { render } from "@testing-library/react";
import { Datepicker } from "./Datepicker";

describe("Datepicker", () => {
  it("Datepicker contains the correct label and style", async () => {
    const { getByText, getByTestId, getByRole } = render(
      <Datepicker id="datepicker" label="Datepicker Title" />
    );

    expect(getByText("Datepicker Title")).toBeVisible();
    expect(getByRole("button")).toHaveClass(
      "bg-hca-blue-500 text-white hover:bg-hca-blue-600"
    );
  });
});
