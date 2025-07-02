import Input from ".";
import { InputProps } from ".";

export default {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
};

export const Basic = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    rounded: "full"
  },
} as { args: InputProps };

export const Large = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "large",
  },
} as { args: InputProps };

export const Error = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    error: "Invalid username",
  },
} as { args: InputProps };

export const Disabled = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    disabled: true,
    value: "Sathya",
  },
} as { args: InputProps };

export const Rounded = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    rounded: "large",
  },
} as { args: InputProps };