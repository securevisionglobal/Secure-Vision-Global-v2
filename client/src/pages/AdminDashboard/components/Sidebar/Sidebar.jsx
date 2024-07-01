import React from "react";
import { BsPostcard } from "react-icons/bs";
import { RiChatFollowUpLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegFolderClosed } from "react-icons/fa6";

import styled from "./Sidebar.module.css";

function Sidebar({ setactiveComponent }) {
  return (
    <>
      <nav>
        <div className={styled.logo}>
          <img src="/loginlogo.png" alt="" />
        </div>
        <div className={styled.sidebar}>
          <div className={styled.sidebar1}>
            <div
              className={styled.jobpost}
              onClick={() => setactiveComponent("Postjob")}
            >
              <BsPostcard />
              <h1>Post Job</h1>
            </div>
            <div
              className={styled.followups}
              onClick={() => setactiveComponent("Followups")}
            >
              <RiChatFollowUpLine />
              <h1>Follow Ups</h1>
            </div>
            <div
              className={styled.registeruser}
              onClick={() => setactiveComponent("Registeruser")}
            >
              <SlUserFollow />
              <h1>Register User</h1>
            </div>
            <div
              className={styled.viewjobs}
              onClick={() => setactiveComponent("Viewjobs")}
            >
              <FaRegFolderClosed />
              <h1>All Jobs</h1>
            </div>
          </div>
          <div className={styled.sidebar2}>
            <div className={styled.logout}>
              <AiOutlineLogout />
              <h1>Logout</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
