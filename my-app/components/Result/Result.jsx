import { useEffect } from "react";
import "./Result.css"; // Ensure the CSS is correctly imported

function Result({ srcCode }) {
  return (
    <div className="result-container">
      <div className="result-frame">
        <iframe
          className="result-iframe"
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}

export default Result;
