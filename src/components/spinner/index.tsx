import classNames from "classnames";
import React from "react";

function Spinner({ size, color, text = "" }: SpinnerProps) {
  return (
    <div className="w-max flex flex-col gap-1">
      <div
        className={classNames(
          "border border-solid border-t-transparent rounded-full animate-spin",
          {
            "h-10 w-10 border-4": size === "small",
            "h-16 w-16 border-8": size === "medium",
            "h-24 w-24 border-8": size === "large",
          }
        )}
        style={{
          borderTopColor: "transparent",
          borderRightColor: color,
          borderBottomColor: color,
          borderLeftColor: color,
        }}
      ></div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default Spinner;

export interface SpinnerProps {
  size: "small" | "medium" | "large";
  color: string;
  text?: string;
}