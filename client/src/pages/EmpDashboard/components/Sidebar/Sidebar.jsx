import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RiChatFollowUpLine } from "react-icons/ri";
import axios from "axios";
import styled from './Sidebar.module.css';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Sidebar({setActiveComponent}) {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/user/logout",{}, {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      localStorage.removeItem('hrName')
      navigate("/login");
    } catch (e) {
      toast.error(e.message);
    }
  };
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
            <div className={styled.logout} onClick={handleLogout}>
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
