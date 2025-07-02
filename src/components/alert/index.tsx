import classNames from "classnames";
import { Ban, Check, CircleAlert, Info, X } from "lucide-react";
import React from "react";

function Alert({
  message,
  type = "info",
  description,
  showIcon = true,
  closable = false,
}: AlertProps) {
  const [showAlert, setShowAlert] = React.useState(true);
  if(!showAlert) return null;
  return (
    <div
      className={classNames("p-3 border border-solid rounded-sm", {
        "bg-blue-500 bg-opacity-10 border-blue-500": type === "info",
        "bg-red-500 bg-opacity-10 border-red-500": type === "error",
        "bg-green-500 bg-opacity-10 border-green-500": type === "success",
        "bg-yellow-500 bg-opacity-10 border-yellow-500": type === "warning",
      })}
    >
      <div className="flex justify-between">
        <span className="text-sm flex items-center gap-2">
          {showIcon && (
            <span>
              {type === "info" && <Info size={14} className="text-blue-500" />}
              {type === "success" && (
                <Check size={14} className="text-green-500" />
              )}
              {type === "error" && <Ban size={14} className="text-red-500" />}
              {type === "warning" && (
                <CircleAlert size={14} className="text-yellow-500" />
              )}
            </span>
          )}
          {message}
        </span>

        {closable && (
          <X
            size={18}
            className="cursor-pointer"
            onClick={() => setShowAlert(false)}
          />
        )}
      </div>
      {description && <p className="text-xs">{description}</p>}
    </div>
  );
}

export default Alert;

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  description?: string;
  showIcon?: boolean;
  closable?: boolean;
}