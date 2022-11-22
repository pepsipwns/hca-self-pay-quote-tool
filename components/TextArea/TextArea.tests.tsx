import { render } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea", () => {
  it("TextArea contains the correct label and placeholder", async () => {
    const { getByText, getByPlaceholderText } = render(
      <TextArea label="TextArea Title" id="input_title" />
    );

    expect(getByText("TextArea Title")).toBeVisible();
    expect(getByPlaceholderText("TextArea Title")).toBeVisible();
  });
});
