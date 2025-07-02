import classNames from "classnames";
import { X } from "lucide-react";
import React from "react";
import Button from "../button";

function Modal({
  showModal,
  onCancel,
  footer,
  title,
  children,
  size = "medium",
  cancelButtonText = "Cancel",
  okButtonText = "Ok",
  onOk = () => {},
  closable = true,
}: ModalProps) {
  if (!showModal) return null;
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={classNames(
          "bg-white shadow-lg rounded p-5 flex flex-col gap-3",
          {
            "w-1/4": size === "small",
            "w-1/2": size === "medium",
            "w-3/4": size === "large",
          }
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-normal">{title}</h1>
          {closable && <X onClick={onCancel} className="cursor-pointer" />}
        </div>

        <hr />

        <div className="text-sm">{children}</div>

        {footer && (
          <div className="flex justify-end gap-5">
            <Button
              title={cancelButtonText}
              onClick={onCancel}
              variant="outlined"
              rounded="small"
            />
            <Button title={okButtonText} onClick={onOk} rounded="small" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;

export interface ModalProps {
  showModal: boolean;
  onCancel?: () => void;
  footer?: boolean;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  cancelButtonText?: string;
  okButtonText?: string;
  onOk?: () => void;
  closable?: boolean;
}