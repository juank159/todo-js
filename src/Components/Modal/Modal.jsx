import React from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

export function Modal({ children }) {
  return createPortal(
    <div className="Modal-background">{children}</div>,
    document.getElementById("modal")
  );
}
