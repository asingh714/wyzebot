"use client";
import { useState } from "react";

import "./UIForm.css";

const UIForm = ({ setHtmlEdit, setCssEdit, setJsEdit }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userQuery: inputData }),
      });
      const data = await response.json();
      setHtmlEdit(data.html);
      setCssEdit(data.css);
      setJsEdit(data.javascript);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <textarea value={inputData} onChange={handleInputChange} type="text" />
      <button type="submit">Submit Code</button>
    </form>
  );
};

export default UIForm;
