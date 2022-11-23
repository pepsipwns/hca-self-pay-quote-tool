import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputGroup from "./InputGroup";
import { partialComponentName } from "../../utils/storybookConstants";

export default {
  title: `${partialComponentName}/Input Group`,
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const Base = Template.bind({});
Base.args = {
  id: "date_of_birth",
  label: "Date of Birth",
  inputs: [
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
  ],
};
