"use client";
import React, { useEffect, useState, useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";

import Result from "@/components/Result/Result";
import "./dashboard.css";
import UIForm from "@/components/UI-Form/UIForm";

const DashboardPage = () => {
  const [htmlEdit, setHtmlEdit] = useState("");
  const [cssEdit, setCssEdit] = useState("");
  const [jsEdit, setJsEdit] = useState("");

  const onChangeHtml = useCallback((value) => {
    setHtmlEdit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCssEdit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJsEdit(value);
  }, []);

  const srcCode = `
      <body>${htmlEdit}</body>
      <style>${cssEdit}</style>
      <script>${jsEdit}</script>
`;
  return (
    <div className="dashboard-grid-container">
      <div className="code-mirrors-container">
        <div className="code-mirror-bg">
          <h2 className="code-mirror-heading">HTML</h2>
          <CodeMirror
            className="codeMirror cm-scroller"
            value={htmlEdit}
            theme="dark"
            extensions={[html(true)]}
            onChange={onChangeHtml}
          />
        </div>
        <div className="code-mirror-bg">
          <h2 className="code-mirror-heading">CSS</h2>
          <CodeMirror
            className="codeMirror cm-scroller"
            value={cssEdit}
            theme="dark"
            extensions={[css(true)]}
            onChange={onChangeCss}
          />
        </div>
        <div className="code-mirror-bg">
          <h2 className="code-mirror-heading">JavaScript</h2>
          <CodeMirror
            className="codeMirror cm-scroller"
            value={jsEdit}
            theme="dark"
            extensions={[javascript(true)]}
            onChange={onChangeJavaScript}
            allow-modals="true"
          />
        </div>
      </div>
      <div className="result-form-container">
        <Result srcCode={srcCode} />
        <UIForm
          setHtmlEdit={setHtmlEdit}
          setCssEdit={setCssEdit}
          setJsEdit={setJsEdit}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
