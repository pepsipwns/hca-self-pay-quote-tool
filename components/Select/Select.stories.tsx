import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";
import { partialComponentName } from "../../utils/storybookConstants";
import { countryOptions } from "./Select.testdata";
import { renderHook } from "@testing-library/react";
import { useForm } from "react-hook-form";

export default {
  title: `${partialComponentName}/Select`,
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const { control } = useForm();
  return <Select {...args} control={control} />;
};

export const Base = Template.bind({});
Base.args = {
  id: "first_name",
  label: "First Name",
  options: countryOptions,
};
