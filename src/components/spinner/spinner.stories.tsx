import Spinner from ".";
import { SpinnerProps } from ".";

export default {
  title: "Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export const Small = {
  args: {
    size: "small",
    color: "black",
  },
} as { args: SpinnerProps };

export const Medium = {
  args: {
    size: "medium",
    color: "black",
  },
} as { args: SpinnerProps };

export const Large = {
  args: {
    size: "large",
    color: "black",
  },
} as { args: SpinnerProps };

export const WithText = {
  args: {
    size: "small",
    color: "black",
    text: "Loading products...",
  },
} as { args: SpinnerProps };