import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar from "./ProgressBar";
import { partialComponentName } from "../../utils/storybookConstants";
import { salesTeamSteps } from "../../utils/stepsConstants";

export default {
  title: `${partialComponentName}/ProgressBar`,
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Base = Template.bind({});
Base.args = {
  steps: [
    {
      id: "step_1",
      label: "Personal Information",
      url: "/",
      status: "active",
    },
    {
      id: "step_2",
      label: "Treatments & Diagnostics",
      url: "/treatment",
      status: "inactive",
    },
    {
      id: "step_3",
      label: "Summary",
      url: "/summary",
      status: "inactive",
    },
  ],
};
