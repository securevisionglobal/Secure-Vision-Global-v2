import React, { useState } from 'react';
import styled from './Adminlogin.module.css';

function Adminlogin() {
  const [loginDetails, setLoginDetails] = useState({
    adminId: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!loginDetails.adminId) newErrors.adminId = "Admin ID is required.";
    if (!loginDetails.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with form submission
      console.log(loginDetails);
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
