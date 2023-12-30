import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        </div>
    </div>
  );
};

export default Spinner;
