import React, { useState, useEffect } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
import styled from "./Registeruser.module.css";
// import registerUser from "../../../../api/registerUser";

function Registeruser() {
  const [userData, setUserData] = useState({
    name: "",
    empId: "",
    contact: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fectchUsers = async () => {
      try{
        const res = await axios.get('http://localhost:5000/api/admin/getallusers')
        setUsers(res.data);
      }catch(err){
        console.error(err);
      }
    }

    fectchUsers();
  }, [])
  

  const validate = () => {
    let newErrors = {};
    if (!userData.name) newErrors.name = "Name is required.";
    if (!userData.empId) newErrors.empId = "Employee ID is required.";
    if (!userData.contact) newErrors.contact = "Contact is required.";
    if (!userData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmpIdChange = (e) => {
    const { value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      empId: value.toLowerCase(),
    }));
  };

  const handleDelete = async(empId) =>{
    try{
      await axios.delete(`http://localhost:5000/api/admin/delete-user/${empId}`, {withCredentials:true});
      setUsers(users.filter(user => user.empId !== empId))
      toast.success("User deleted successfully.");

    }catch(err){
      console.log(err);
      toast.error("Failed to delete user. Please try again later.");
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with form submission
      // Simulate form submission to a server
      // await registerUser(userData)
      try {
        //API CAll
        await axios.post(
          "http://localhost:5000/api/admin/register-user",
          userData,
          {withCredentials:true}
        );
        setUsers([...users, userData]);
        //Reset form submission
        setUserData({
          name: "",
          empId: "",
          contact: "",
          password: "",
        });

        setErrors({});
        toast.success("User Registered")
      } catch (err) {
        // console.log(err);
        toast.error("Failed to register user");
      }
    } else {
      // Set errors to be displayed
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className={styled.head}>
        <h1>Register a new User</h1>
      </div>
      <div className={styled.wrapper}>
        <div className={styled.form}>
          <div className={styled.title}>
            <IoPersonAdd />
            <h1>Register an Employee</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styled.input}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styled.inputs}
                value={userData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className={styled.error}>{errors.name}</p>}
            </div>
            <div className={styled.input}>
              <label htmlFor="empid">EmpId</label>
              <input
                type="text"
                id="empid"
                name="empid"
                className={styled.inputs}
                value={userData.empId}
                onChange={handleEmpIdChange}
                required
              />
              {errors.empId && <p className={styled.error}>{errors.empId}</p>}
            </div>
            <div className={styled.input}>
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className={styled.inputs}
                value={userData.contact}
                onChange={handleChange}
                required
              />
              {errors.contact && (
                <p className={styled.error}>{errors.contact}</p>
              )}
            </div>
            <div className={styled.input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={styled.inputs}
                value={userData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className={styled.error}>{errors.password}</p>
              )}
            </div>
            <div className={styled.submit}>
              <button type="submit" className={styled.btn}>
                Register User
              </button>
            </div>
          </form>
        </div>
        <div className={styled.userdata}>
          <div className={styled.container}>
            <h1>User Data</h1>
            {users.map((user) => (
              <div key={user.empId} className={styled.user}>
                <p>Name: {user.name}</p>
                <p>EmpId: {user.empId}</p>
                <p>Contact: {user.contact}</p>
                <button
                  className={styled.del}
                  onClick={() => handleDelete(user.empId)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Registeruser;
