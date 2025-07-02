import classNames from "classnames";
import React from "react";

function FlexContainer({
  children,
  direction = "column",
  align = "top",
  justify = "start",
  height,
  gap,
  showBorder = false,
}: FlexContainerProps) {
  return (
    <div
      style={{
        height,
        gap,
      }}
      className={classNames("flex", {
        "flex-col": direction === "column",
        "justify-start": justify === "start",
        "justify-center": justify === "center",
        "justify-end": justify === "end",
        "items-center": align === "center",
        "items-start": align === "top",
        "items-end": align === "bottom",
        "border border-gray-500 border-solid": showBorder,
      })}
    >
      {children}
    </div>
  );
}

export default FlexContainer;

export interface FlexContainerProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  align?: "center" | "top" | "bottom";
  justify?: "center" | "start" | "end";
  gap?: number;
  height?: number;
  showBorder?: boolean;
}