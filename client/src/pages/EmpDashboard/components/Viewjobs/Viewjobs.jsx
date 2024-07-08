import React, { useState, useEffect } from "react";
import styled from "./Viewjobs.module.css";
import axios from "axios";
import { toast } from "react-toastify";

function Viewjobs({url}) {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${url}/api/jobposts/job-posts`
        );
        setJobData(res.data);
      } catch (e) {
        console.error(e);
        toast.error("Error fetching jobs");
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <div className={styled.head}>
        <h1>All Jobs</h1>
      </div>
      {/* Add your job listings here */}
      <div className={styled.cards}>
        {
          jobData.map((data)=> (
            <div className={styled.jobcard} key={data._id}>
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
          </div>
          ))
        }
      </div>
    </>
  );
}

export default Viewjobs;
