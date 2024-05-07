"use client";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import "./UIForm.css";
import lowercaseKeys from "@/utils/lowercaseKeys";

const UIForm = ({ setHtmlEdit, setCssEdit, setJsEdit }) => {
  const [inputData, setInputData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userQuery: inputData }),
      });

      let data = await response.json();

      data = lowercaseKeys(data);
      
      setHtmlEdit(data.html);
      setCssEdit(data.css);
      setJsEdit(data.javascript);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <textarea
        value={inputData}
        onChange={handleInputChange}
        type="text"
        placeholder=""
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? <PulseLoader color="#282c34" size={8} /> : "Submit"}
      </button>
    </form>
  );
};

export default UIForm;
