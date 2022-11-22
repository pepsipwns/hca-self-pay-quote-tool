import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";
import { partialComponentName } from "../../utils/storybookConstants";

export default {
  title: `${partialComponentName}/Input`,
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Base = Template.bind({});
Base.args = {
  id: "first_name",
  label: "First Name",
};
