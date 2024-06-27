import React, {useState} from 'react'
import styled from './Adminlogin.module.css'

function Adminlogin() {
    const [loginDetails, setloginDetails] = useState({
        adminId:"",
        password:""
    })

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(loginDetails)

    }
    // console.log("Rendering Admin Login");
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
          <form>
            <div className={styled.logininput}>
              <label htmlFor="adminId">ID</label>
              <input 
              type="text"  
              name="adminId" 
              id="adminId" 
              value={loginDetails.adminId}
              onChange={(e)=>setloginDetails({...loginDetails,adminId:e.target.value})}
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

export default Adminlogin