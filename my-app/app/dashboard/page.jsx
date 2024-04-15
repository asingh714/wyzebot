"use client";
import React, { useEffect, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";

import Result from "@/components/Result/Result";
import "./dashboard.css";

const DashboardPage = () => {
  const [html_edit, setHtmlEdit] = useState("");
  const [css_edit, setCssEdit] = useState("");
  const [js_edit, setJsEdit] = useState("");

  const srcCode = `
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
`;
  return (
    <div className="dashboard-grid-container">
      <div className="code-mirrors-container">
        <div className="code-mirror-bg">
          <h2 className="code-mirror-heading">HTML</h2>
          <CodeMirror
            className="codeMirror"
            value={html_edit}
            theme="dark"
            extensions={[html(true)]}
          />
        </div>
        <div className="code-mirror-bg">
          <h2 className="code-mirror-heading">CSS</h2>
          <CodeMirror
            className="codeMirror"
            value={css_edit}
            theme="dark"
            extensions={[css(true)]}
          />
        </div>
        <div className="code-mirror-bg">
          <h2 className="code-mirror-heading">JavaScript</h2>
          <CodeMirror
            className="codeMirror"
            value={js_edit}
            theme="dark"
            extensions={[javascript(true)]}
          />
        </div>
      </div>
      <div className="result-form-container">
        <Result srcCode={srcCode} />
        <form onSubmit={() => {}}>
          <textarea type="text" />
          <button type="submit">Submit Code</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
