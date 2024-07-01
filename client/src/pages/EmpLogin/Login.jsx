import React, { useState } from "react";
import styled from "./Login.module.css";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    empid: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!loginDetails.empid) newErrors.empid = "Employee ID is required.";
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
        empid: "",
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
                value={loginDetails.empid}
                onChange={(e) => setLoginDetails({ ...loginDetails, empid: e.target.value.toLowerCase() })}
              />
              {errors.empid && <p className={styled.error}>{errors.empid}</p>}
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
