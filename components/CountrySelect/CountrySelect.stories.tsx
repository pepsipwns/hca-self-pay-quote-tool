import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CountrySelect from "./CountrySelect";
import { partialComponentName } from "../../utils/storybookConstants";
import { useForm } from "react-hook-form";

export default {
  title: `${partialComponentName}/Country Select`,
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => {
  const { control } = useForm();
  return <CountrySelect {...args} control={control} />;
};

export const Base = Template.bind({});
Base.args = {
  id: "country",
  label: "Country",
};
