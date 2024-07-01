  import React, { useState } from "react";
import styled from "./Postjob.module.css";

function Postjob() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log(jobData);
      setjobData({
        companyName: "",
        jobTitle: "",
        location: "",
        salary: "",
        description: "",
      });
      setError({});
    } else {
      setError(newErrors);
    }
    // submit to your server here
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
