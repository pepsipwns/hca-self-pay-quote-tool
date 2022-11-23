import {
  fireEvent,
  render,
  renderHook,
} from "@testing-library/react";
import { useForm } from "react-hook-form";
import CountrySelect from "./CountrySelect";

describe("CountrySelect", () => {
  it("CountrySelect contains the correct label and placeholder", async () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    const { getByText } = render(
      <CountrySelect
        id="country"
        label="Country"
        control={control}
        required
      />
    );

    expect(getByText("Country")).toBeVisible();
    expect(getByText("Select a country")).toBeVisible();
  });

  it("CountrySelect changing option updates value & value text", async () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;
    const { getByText, getByRole } = render(
      <CountrySelect
        id="country"
        label="Country"
        control={control}
        required
      />
    );

    fireEvent.change(getByRole("button"), {
      target: { value: "AF" },
    });
  });
});
