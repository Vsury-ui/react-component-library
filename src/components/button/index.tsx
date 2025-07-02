import React from "react";
import classNames from "classnames";
import ThemeProvider from "../theme-provider";
function Button({
  title,
  variant = "contained",
  onClick,
  disabled,
  size = "medium",
  rounded = "none",
  icon,
  iconPosition = "left",
  loading = false,
}: ButtonProps) {
  return (
    <ThemeProvider>
      <button
        onClick={onClick}
        className={classNames("cursor-pointer shadow-none text-sm px-5", {
          "border border-solid border-primary bg-white text-primary":
            variant === "outlined",
          "bg-primary text-white border-none":
            variant === "contained" && !disabled,
          "pointer-events-none bg-gray-300 border-none cursor-not-allowed text-gray-500":
            disabled,
          "h-8": size === "small",
          "h-10": size === "medium",
          "h-12": size === "large",
          "rounded-none": rounded === "none",
          "rounded-sm": rounded === "small",
          "rounded-md": rounded === "medium",
          "rounded-lg": rounded === "large",
          "rounded-full": rounded === "full",
          "flex gap-3 items-center": icon || loading,
          "flex-row-reverse": icon && iconPosition === "right",
        })}
      >
        {icon && icon}
        {title}

        {loading && (
          <div
            className={classNames(
              "w-2 h-2 border-[2px] border-solid border-t-transparent animate-spin rounded-full",
              {
                "border-white": variant === "contained",
                "border-primary": variant === "outlined",
              }
            )}
          ></div>
        )}
      </button>
    </ThemeProvider>
  );
}

export default Button;

export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}
