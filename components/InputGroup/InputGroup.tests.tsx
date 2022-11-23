import { render } from "@testing-library/react";
import Input from "./InputGroup";

describe("Input", () => {
  it("Input contains the correct label and placeholder", async () => {
    const { getByText, getByPlaceholderText } = render(
      <Input label="Input Title" id="input_title" />
    );

    expect(getByText("Input Title")).toBeVisible();
    expect(getByPlaceholderText("Input Title")).toBeVisible();
  });
});
