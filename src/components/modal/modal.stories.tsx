import { useState } from "react";
import Modal from ".";
import { ModalProps } from ".";
import Button from "../button";

export default {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};

const Template = (args: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button
        title="Open Modal"
        onClick={() => setShowModal(true)}
        variant="outlined"
        rounded="medium"
      />

      <Modal
        {...args}
        showModal={showModal}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
};

export const Basic = {
  args: {
    showModal: true,
    children: "Modal Content",
    closable: true,
    title: "Modal Title",
    size: "medium",
  },
  render: Template,
} as { args: ModalProps };

export const WithFooter = {
  args: {
    showModal: true,
    children: "Modal Content",
    closable: true,
    title: "Modal Title",
    size: "medium",
    footer: true,
    cancelButtonText: "Close",
    okButtonText: "Save",
    onOk: () => alert("Saved!"),
  },
  render: Template,
} as { args: ModalProps };

export const WithoutCloseButton = {
  args: {
    showModal: true,
    children: "Modal Content",
    closable: false,
    title: "Modal Title",
    size: "medium",
  },
  render: Template,
} as { args: ModalProps };