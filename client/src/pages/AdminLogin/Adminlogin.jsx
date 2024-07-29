import React, { useState } from 'react';
import styled from './Adminlogin.module.css';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Adminlogin() {
  const url = "https://svgbackendv1.onrender.com";
  // const url = "http://localhost:5000";
  const [loginDetails, setLoginDetails] = useState({
    adminId: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!loginDetails.adminId) newErrors.adminId = "Admin ID is required.";
    if (!loginDetails.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with form submission
      try{
        //API Call
        const response = await axios.post(
          `${url}/api/admin/login`,
          loginDetails, {withCredentials:true}
        );

        console.log("res from api: ", response)
        if(response.data.success){
          toast.success("Logged in successfully.");
          // Redirect to dashboard

          // console.log("Before Timeout document.cookie:", document.cookie);
          navigate("/admin/dashboard");
          // setTimeout(()=>{
          // }, 5000)
        }

      }catch(e) {
        console.log("Error:", e);
        toast.error("Failed to login. Please try again.");
        setErrors({...errors, password: "Invalid admin ID or password." });
      }
      setLoginDetails({
        adminId: "",
        password: ""
      });
      setErrors({});
    } else {
      // Set errors to be displayed
      setErrors(newErrors);
    }
  };

  return (
    <div className={styled.login}>
      <div className={styled.container}>
        <div className={styled.logo}>
          <img src="/loginlogo.png" alt="Logo" />
        </div>
        <div className={styled.logintag}>
          <h1>Admin Login</h1>
        </div>
        <div className={styled.loginform}>
          <form onSubmit={handleSubmit}>
            <div className={styled.logininput}>
              <label htmlFor="adminId">ID</label>
              <input
                type="text"
                name="adminId"
                id="adminId"
                value={loginDetails.adminId}
                onChange={(e) => setLoginDetails({ ...loginDetails, adminId: e.target.value })}
              />
              {errors.adminId && <p className={styled.error}>{errors.adminId}</p>}
            </div>
            <div className={styled.logininput}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginDetails.password}
                onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
              />
              {errors.password && <p className={styled.error}>{errors.password}</p>}
            </div>
            <div className={styled.loginbtn}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
