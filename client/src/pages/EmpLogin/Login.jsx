import React, { useState } from "react";
import styled from "./Login.module.css";
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const url = "http://localhost:5000";
  const [loginDetails, setLoginDetails] = useState({
    empId: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!loginDetails.empId) newErrors.empId = "Employee ID is required.";
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
          `${url}/api/user/login`,
          loginDetails, {withCredentials:true}
        );

        console.log("res from api: ", response)
        if(response.data.success){
          

          //store Hr name in local storage
          localStorage.setItem("hrName", response.data.hrName);
          // Redirect to dashboard
          toast.success(`Hi ${response.data.hrName}`);
          navigate("/dashboard");
        }

      }catch(e) {
        console.log("Error:", e);
        toast.error("Failed to login. Please try again.");
        setErrors({...errors, password: "Invalid ID or password." });
      }
      setLoginDetails({
        empId: "",
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
          <img src="./loginlogo.png" alt="Logo" />
        </div>
        <div className={styled.logintag}>
          <h1>Employee Login</h1>
        </div>
        <div className={styled.loginform}>
          <form onSubmit={handleSubmit}>
            <div className={styled.logininput}>
              <label htmlFor="empid">Employee ID</label>
              <input
                type="text"
                name="empid"
                id="empid"
                value={loginDetails.empId}
                onChange={(e) => setLoginDetails({ ...loginDetails, empId: e.target.value.toLowerCase() })}
              />
              {errors.empId && <p className={styled.error}>{errors.empId}</p>}
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

export default Login;
