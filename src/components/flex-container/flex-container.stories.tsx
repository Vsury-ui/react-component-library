import FlexContainer from ".";

import { FlexContainerProps } from ".";

export default {
  title: "FlexContainer",
  component: FlexContainer,
  tags: ["autodocs"],
};

const children = (
  <>
    <div className="p-5 bg-red-500 text-white h-max">
        Item 1
    </div>
    <div className="p-5 bg-blue-500 text-white h-max">
        Item 2
    </div>
    <div className="p-5 bg-green-500 text-white h-max">
        Item 3
    </div>
  </>
);

export const Basic = {
  args: {
    children,
    justify: "start",
    align: "top",
    direction: "row",
    height : 300,
    showBorder : true,
  },
} as { args: FlexContainerProps };