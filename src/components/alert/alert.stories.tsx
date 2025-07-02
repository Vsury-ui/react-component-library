import Alert from ".";
import { AlertProps } from ".";

export default {
  component: Alert,
  title: "Alert",
  tags: ["autodocs"],
};

export const Info = {
  args: {
    message: "This is an info alert",
    description:
      "This is the description of the info alert , it can be multiline",
    type: "info",
  },
} as { args: AlertProps };

export const Success = {
  args: {
    message: "This is a success alert",
    description:
      "This is the description of the success alert , it can be multiline",
    type: "success",
  },
} as { args: AlertProps };

export const Error = {
  args: {
    message: "This is an error alert",
    description:
      "This is the description of the error alert , it can be multiline",
    type: "error",
  },
} as { args: AlertProps };

export const Warning = {
  args: {
    message: "This is a warning alert",
    description:
      "This is the description of the warning alert , it can be multiline",
    type: "warning",
  },
} as { args: AlertProps };

export const WithoutIcon = {
  args: {
    message: "Info alert without icon",
    description:
      "This is the description of the info alert , it can be multiline",
    type: "info",
    showIcon: false,
  },
} as { args: AlertProps };

export const Closable = {
  args: {
    message: "This is a closable alert",
    description:
      "This is the description of the closable alert , it can be multiline",
    type: "info",
    closable: true,
  },
} as { args: AlertProps };