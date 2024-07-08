import React, { useState, useEffect } from "react";
import styled from "./Postjob.module.css";
import axios from "axios"
import { toast } from 'react-toastify';

function Postjob({url}) {
  const [jobData, setjobData] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    salary: "",
    description: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setjobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!jobData.companyName) errors.companyName = "Company Name is required";
    if (!jobData.jobTitle) errors.jobTitle = "Job Title is required";
    if (!jobData.location) errors.location = "Location is required";
    if (!jobData.salary) errors.salary = "Salary is required";
    if (!jobData.description) errors.description = "Description is required";
    return errors;
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      //Adding jobs
      try{
        const res = await axios.post(`${url}/api/jobposts/add-jobpost`, jobData, {withCredentials:true});
        // console.log(res.data);
        setjobData({
          companyName: "",
          jobTitle: "",
          location: "",
          salary: "",
          description: "",
        });
        setError({});
        toast.success("Job Posted Successfully")
        
      }catch(e){
        console.log(e.message);
        toast.error("Failed to post job. Please try again later.")
      }
      
    } else {
      setError(newErrors);
    }
    
  };
  return (
    <>
      <div className={styled.head}>
        <h1>Post a Job</h1>
      </div>
      <div className={styled.form}>
        <div className={styled.inputGroup}>
          <input
            type="text"
            name="companyName"
            onChange={handleChange}
            placeholder="Company Name"
            className={styled.inputs}
            value={jobData.companyName}
          />
          {error.companyName && <p className={styled.error}>{error.companyName}</p>}
        </div>
        <div className={styled.inputGroup}>
          <input
            type="text"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className={styled.inputs}
          />
          {error.jobTitle && <p className={styled.error}>{error.jobTitle}</p>}
        </div>
        <div className={styled.inputGroup}>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            placeholder="Location"
            className={styled.inputs}
          />
          {error.location && <p className={styled.error}>{error.location}</p>}
        </div>
        <div className={styled.inputGroup}>
          <input
            type="text"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            placeholder="Salary"
            className={styled.inputs}
          />
          {error.salary && <p className={styled.error}>{error.salary}</p>}
        </div>
        <div className={styled.inputGroup}>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            placeholder="Job Description"
            className={styled.textarea}
          />
          {error.description && <p className={styled.error}>{error.description}</p>}
        </div>
        <button type="submit" className={styled.btn} onClick={handleSubmit}>
          Post
        </button>
      </div>
    </>
  );
}

export default Postjob;
