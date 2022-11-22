import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextArea from "./TextArea";
import { partialComponentName } from "../../utils/storybookConstants";

export default {
  title: `${partialComponentName}/TextArea`,
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Base = Template.bind({});
Base.args = {
  id: "first_name",
  label: "First Name",
};
