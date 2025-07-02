import React, { useState } from "react";
import Switch from ".";
import { SwitchProps } from ".";

export default {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
};

const Template = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Basic = {
  args: {
    label: "Is Active ?",
    checked: false,
  },
  render: Template,
} as { args: SwitchProps; render: () => React.JSX.Element };


export const Horizontal = {
  args: {
    label: "Is Active ?",
    checked: false,
    orientation: "horizontal",
  },
  render: Template,
} as { args: SwitchProps; render: () => React.JSX.Element };

export const Disabled = {
  args: {
    label: "Is Active ?",
    checked: true,
    disabled: true,
  },
  render: Template,
} as { args: SwitchProps; render: () => React.JSX.Element };