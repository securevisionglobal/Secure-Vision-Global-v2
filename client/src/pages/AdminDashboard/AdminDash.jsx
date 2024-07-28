import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "./AdminDash.module.css";
import Postjob from "./components/PostJob/Postjob";
import Followups from "./components/Followups/Followups";
import Registeruser from "./components/RegisterUser/Registeruser";
import Viewjobs from "./components/ViewJobs/Viewjobs";
function AdminDash() {
  const url = "https://svgbackendv1.onrender.com";
  // const url = "http://localhost:5000";
  const [activeComponent, setactiveComponent] = useState("Postjob");
  const renderComponent = () => {
    switch (activeComponent) {
      case "Postjob":
        return <Postjob url={url} />;
      case "Followups":
        return <Followups url={url}/>;
      case "Registeruser":
        return <Registeruser url={url}/>;
      case "Viewjobs":
        return <Viewjobs url={url}/>;
      default:
        return <Postjob url={url}/>;
    }
  };
  return (
    <div className={styled.main}>
      <Sidebar url={url} setactiveComponent={setactiveComponent} />
      <div className={styled.content}>{renderComponent()}</div>
    </div>
  );
}

export default AdminDash;
