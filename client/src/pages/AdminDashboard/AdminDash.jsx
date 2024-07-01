import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from './AdminDash.module.css';
import Postjob from "./components/PostJob/Postjob";
import Followups from "./components/Followups/Followups";
import Registeruser from "./components/RegisterUser/Registeruser";
import Viewjobs from "./components/ViewJobs/Viewjobs";
function AdminDash() {

  const [activeComponent, setactiveComponent] = useState('Postjob');
  const renderComponent = () =>{
    switch(activeComponent){
      case 'Postjob':
        return <Postjob />
      case 'Followups':
        return <Followups />
      case 'Registeruser':
        return <Registeruser />
      case 'Viewjobs':
        return <Viewjobs />
      default:
        return <Postjob />
    }
  }
  return (
    <div className={styled.main}>
      <Sidebar setactiveComponent={setactiveComponent}/>
      <div className={styled.content}>
        {renderComponent()}
      </div>
  
    </div>
  );
}

export default AdminDash;
