import Editor from "@/components/Editor";

const DashboardPage = () => {
  return (
    <div className="page dashboard-page">
      <div className="section top-section">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="section bottom-section">
        <iframe
          title="output"
          sandbox="allow-scripts"
          style={{ border: "0" }}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
