import React, { useState, useEffect } from "react";
import styled from "./Viewjobs.module.css";
import { toast } from "react-toastify";
import axios from 'axios'

function Viewjobs() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/jobposts/job-posts",
          {withCredentials:true}
        );
        setJobData(res.data);
      } catch (e) {
        toast.error("Error fetching jobs", { autoClose: 3000 });
        console.error(e);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (jobId) => {
    try{
      await axios.delete(`http://localhost:5000/api/jobposts/delete-jobpost/${jobId}`, {withCredentials: true});
      setJobData(jobData.filter(job => job._id !== jobId)) 
      toast.success("Job deleted successfully.");


    }catch(e) {
      toast.error("Failed to delete job", { autoClose: 3000 });
      console.error(e);
    }
  }
  return (
    <>
      <div className={styled.head}>
        <h1>All Jobs</h1>
      </div>
      {/* Add your job listings here */}
      <div className={styled.cards}>
        {/* Job Card */}
        {jobData.map((data) => (
          <div className={styled.jobcard}>
            <p>
              <span>Company Name:</span> {data.companyName}
            </p>
            <p>
              <span>Job Title:</span> {data.jobTitle}
            </p>
            <p>
              <span>Location:</span> {data.location}
            </p>
            <p>
              <span>Salary:</span> {data.salary}
            </p>
            <p>
              <span>Description:</span> {data.description}
            </p>
            <button className={styled.delbtn} onClick={()=> handleDelete(data._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Viewjobs;
