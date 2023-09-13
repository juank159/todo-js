import React from "react";
import "./Loading.css";

export function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-circle"></div>
      <div className="loading-text"></div>
    </div>
  );
}
