import { render } from "@testing-library/react";
import Input from "../Input/Input";
import InputGroup from "./InputGroup";

describe("InputGroup", () => {
  it("InputGroup contains the correct label and placeholder", async () => {
    const { getByText, getAllByTestId } = render(
      <InputGroup
        id="date_of_birth"
        label="Date of Birth"
        required
        inputs={[
          {
            id: "dob_day",
            placeholder: "31",
            className: "w-8 mr-2",
          },
          {
            id: "dob_month",
            placeholder: "12",
            className: "w-8 mr-2",
          },
          {
            id: "dob_year",
            placeholder: "2021",
            className: "w-40",
          },
        ]}
      />
    );

    expect(getByText("Date of Birth")).toBeVisible();
    expect(getAllByTestId("group-input")).toHaveLength(3);
  });
});
