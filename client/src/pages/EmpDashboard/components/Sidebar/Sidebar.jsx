import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RiChatFollowUpLine } from "react-icons/ri";
import axios from "axios";
import styled from './Sidebar.module.css';

function Sidebar({setActiveComponent}) {
  return (
    <>
      <nav>
        <div className={styled.logo}>
          <img src="/loginlogo.png" alt="" />
        </div>
        <div className={styled.sidebar}>
          <div className={styled.sidebar1}>
            <div className={styled.followups}
            onClick={()=> setActiveComponent('Followups')}
            >
              <RiChatFollowUpLine />
              <h1>Follow Ups</h1>
            </div>

            <div className={styled.viewjobs} onClick={()=> setActiveComponent('Viewjobs')}>
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
