import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { partialComponentName } from "../../utils/storybookConstants";

export default {
  title: `${partialComponentName}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Button",
};

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  variant: "dark-outline",
  label: "Button",
};

export const LightOutline = Template.bind({});
LightOutline.args = {
  variant: "light-outline",
  label: "Button",
};
LightOutline.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: "small",
  label: "Button",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  size: "small",
  variant: "secondary",
  label: "Button",
};

export const DarkOutlineSmall = Template.bind({});
DarkOutlineSmall.args = {
  size: "small",
  variant: "dark-outline",
  label: "Button",
};

export const LightOutlineSmall = Template.bind({});
LightOutlineSmall.args = {
  size: "small",
  variant: "light-outline",
  label: "Button",
};
LightOutlineSmall.parameters = {
  backgrounds: {
    default: "dark",
  },
};
