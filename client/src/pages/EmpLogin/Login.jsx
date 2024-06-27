import React, { useState } from "react";
import styled from "./Login.module.css";

function Login() {
    const [loginDetails, setloginDetails] = useState({
        empid:"",
        password:""
    })

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(loginDetails)

    }
  return (
    <div className={styled.login}>
      <div className={styled.container}>
        <div className={styled.logo}>
          <img src="./loginlogo.png" alt="" />
        </div>
        <div className={styled.logintag}>
          <h1>Employee Login</h1>
        </div>
        <div className={styled.loginform}>
          <form>
            <div className={styled.logininput}>
              <label htmlFor="empid">Employee ID</label>
              <input 
              type="text"  
              name="empid" 
              id="empid" 
              value={loginDetails.empid}
              onChange={(e)=>setloginDetails({...loginDetails,empid:e.target.value})}
              />
            </div>
            <div className={styled.logininput}>
                <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginDetails.password}
                onChange={(e)=>setloginDetails({...loginDetails,password:e.target.value})}
              />
            </div>
            <div className={styled.loginbtn}>
              <button type="submit" onClick={handlesubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
