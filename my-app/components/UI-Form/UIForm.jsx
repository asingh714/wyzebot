"use client";
import { useState } from "react";
import "./UIForm.css";

const UIForm = () => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <textarea
        value={inputData}
        onChange={handleInputChange}
        type="text"
        className=""
      />
      <button type="submit">Submit Code</button>
    </form>
  );
};

export default UIForm;
