import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link from "./Link";
import { partialComponentName } from "../../utils/storybookConstants";

export default {
  title: `${partialComponentName}/Link`,
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} />
);

export const Base = Template.bind({});
Base.args = {
  href: "/",
  label: "Link",
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  href: "/",
  className: "text-xs",
  label: "Link",
};

export const Small = Template.bind({});
Small.args = {
  href: "/",
  className: "text-sm",
  label: "Link",
};

export const Large = Template.bind({});
Large.args = {
  href: "/",
  className: "text-lg",
  label: "Link",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  href: "/",
  className: "text-xl",
  label: "Link",
};
