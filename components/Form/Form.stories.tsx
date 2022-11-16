import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./Form";
import { partialComponentName } from "../../utils/storybookConstants";
import { Input } from "../Input/Input";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: `${partialComponentName}/Form`,
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  return (
    <Form onSubmit={(data) => console.log(data)}>
      <Input label="First Name" id="first_name" />
      <Input label="Last Name" id="last_name" />
    </Form>
  );
};

export const Base = Template.bind({});
