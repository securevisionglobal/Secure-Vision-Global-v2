import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "./EmpDash.module.css";
import Viewjobs from "./components/Viewjobs/Viewjobs";
import Followups from "./components/Followups/Followups";

function EmpDash() {
  const [activeComponent, setActiveComponent] = useState("Viewjobs");
  const renderComponent = () => {
    switch (activeComponent) {
      case "Viewjobs":
        return <Viewjobs />;
      case "Followups":
        return <Followups />;

      default:
        return <Viewjobs />;
    }
  };
  return (
    <div className={styled.main}>
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className={styled.content}>{renderComponent()}</div>
    </div>
  );
}

export default EmpDash;
