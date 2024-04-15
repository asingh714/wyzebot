import "./Result.css";

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
