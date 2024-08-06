import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "./EmpDash.module.css";
import Viewjobs from "./components/Viewjobs/Viewjobs";
import Followups from "./components/Followups/Followups";

function EmpDash() {
  const url = "https://securevisionglobal-backend.onrender.com";
  // const url = "http://localhost:5000";
  const [activeComponent, setActiveComponent] = useState("Viewjobs");
  const renderComponent = () => {
    switch (activeComponent) {
      case "Viewjobs":
        return <Viewjobs url={url}/>;
      case "Followups":
        return <Followups url={url}/>;

      default:
        return <Viewjobs url={url} />;
    }
  };
  return (
    <div className={styled.main}>
      <Sidebar url={url} setActiveComponent={setActiveComponent} />
      <div className={styled.content}>{renderComponent()}</div>
    </div>
  );
}

export default EmpDash;
