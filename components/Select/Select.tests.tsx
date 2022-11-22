import {
  fireEvent,
  render,
  renderHook,
} from "@testing-library/react";
import { useForm } from "react-hook-form";
import Select from "./Select";
import { countryOptions } from "./Select.testdata";

describe("Select", () => {
  it("Select contains the correct label and placeholder", async () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    const { getByText } = render(
      <Select
        id="country"
        label="Country"
        options={countryOptions}
        control={control}
        required
      />
    );

    expect(getByText("Country")).toBeVisible();
    expect(getByText("Select...")).toBeVisible();
  });

  it("Select changing option updates value & value text", async () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    const { getByText, getByLabelText } = render(
      <Select
        id="country"
        label="Country"
        options={countryOptions}
        control={control}
        required
      />
    );

    fireEvent.change(getByLabelText("Country"), {
      target: { value: "AF" },
    });
    expect(getByText("Afghanistan")).toBeVisible();
  });
});
