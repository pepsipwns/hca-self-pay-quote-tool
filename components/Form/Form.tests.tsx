import { render } from "@testing-library/react";
import Input from "../Input/Input";
import Form from "./Form";

describe("Form", () => {
  it("Form contains correct Inputs with labels", async () => {
    const { getByText } = render(
      <Form onSubmit={(data) => console.log(data)}>
        <Input label="First Name" id="first_name" />
        <Input label="Last Name" id="last_name" required />
      </Form>
    );

    expect(getByText("First Name")).toBeVisible();
    expect(getByText("Last Name")).toBeVisible();
  });
});
