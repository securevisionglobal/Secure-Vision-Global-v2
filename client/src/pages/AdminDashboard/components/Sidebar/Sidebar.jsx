import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import styled from "./Sidebar.module.css";

import { BsPostcard } from "react-icons/bs";
import { RiChatFollowUpLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegFolderClosed } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setactiveComponent, url }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(
        `${url}/api/admin/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      toast.success("Logged out successfully");
      navigate("/admin");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <img src="/loginlogo.png" alt="" />
        </ListItem>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => setactiveComponent("Postjob")}>
            <ListItemIcon>
              <BsPostcard />
            </ListItemIcon>
            <ListItemText primary={"Post Job"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setactiveComponent("Followups")}>
            <ListItemIcon>
              <RiChatFollowUpLine />
            </ListItemIcon>
            <ListItemText primary={"Follow Ups"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setactiveComponent("Registeruser")}>
            <ListItemIcon>
              <SlUserFollow />
            </ListItemIcon>
            <ListItemText primary={"Register User"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setactiveComponent("Viewjobs")}>
            <ListItemIcon>
              <FaRegFolderClosed />
            </ListItemIcon>
            <ListItemText primary={"All Jobs"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <AiOutlineLogout />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={styled.Navbar}>
      <MenuIcon onClick={toggleDrawer("left", true)} />

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Sidebar;
