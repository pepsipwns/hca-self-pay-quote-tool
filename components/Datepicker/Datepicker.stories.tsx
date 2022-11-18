import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Datepicker } from "./Datepicker";
import { partialComponentName } from "../../utils/storybookConstants";

export default {
  title: `${partialComponentName}/Datepicker`,
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => (
  <Datepicker id="datepicker" label="Pick a date" />
);
