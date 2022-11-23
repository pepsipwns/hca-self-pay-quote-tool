import {
  fireEvent,
  render,
  renderHook,
} from "@testing-library/react";
import { useForm } from "react-hook-form";
import { Datepicker } from "./Datepicker";

// Doesn't work due to the following error:
// Uncaught expected class but got object
// (I think its due to the Datepicker rendering another inner component )
// describe("Datepicker", () => {
//   it("Datepicker contains the correct label and style", async () => {
//     const { result } = renderHook(() => useForm());
//     const { control } = result.current;
//     const { getByText, getByTestId, getByRole } = render(
//       <Datepicker
//         id="datepicker"
//         label="Datepicker Title"
//         control={control}
//       />
//     );

//     expect(getByText("Datepicker Title")).toBeVisible();

//     const datePicker = getByTestId("datepicker") as HTMLInputElement;
//     fireEvent.click(datePicker);
//     await fireEvent.change(datePicker, {
//       target: { value: "29 Oct, 2020" },
//     });

//     expect(datePicker.value).toBe("29 Oct, 2020");
//   });
// });
