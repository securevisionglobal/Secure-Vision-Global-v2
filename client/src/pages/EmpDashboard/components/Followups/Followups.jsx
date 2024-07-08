import React, { useState, useEffect } from "react";
import styled from "./Followups.module.css";
import axios from "axios";
import { toast } from "react-toastify";

function Followups({ url }) {
  const loggedInHRName = localStorage.getItem("hrName") || "";
  const [companyNames, setCompanyNames] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    Number: "",
    CompanyName: "",
    HRName: loggedInHRName,
    DOJ: "",
    Status: "",
    PayBackDays: "",
  });
  const [candidate, setCandidate] = useState([]);
  const [editingStatus, setEditingStatus] = useState("");
  const [editingcandidateId, setEditingcandidateId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`${url}/api/companyname/`);
        setCompanyNames(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching company names");
      }
    };

    const fetchCandidates = async () => {
      try {
        const response = await axios.get(`${url}/api/candidates/get`, {
          withCredentials: true,
        });
        const filteredCandidates = response.data.filter(
          (candidate) => candidate.HRName === loggedInHRName
        );
        setCandidate(filteredCandidates);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching candidates");
        return;
      }
    };

    fetchCandidates();
    fetchCompany();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, Number, CompanyName, HRName, DOJ, Status, PayBackDays } =
      formData;
    if (
      !name ||
      !Number ||
      !CompanyName ||
      !Status ||
      !PayBackDays ||
      !HRName ||
      !DOJ
    ) {
      toast.error("All fields are required");
      return;
    }

    const newCandidate = {
      name,
      Number,
      CompanyName,
      HRName,
      DOJ,
      Status,
      PayBackDays,
    };
    try {
      const response = await axios.post(
        `${url}/api/candidates/add-candidate`,
        newCandidate,
        { withCredentials: true }
      );

      setCandidate([...candidate, response.data.data]);
      toast.success("Candidate added successfully");
    } catch (error) {}
    setFormData({
      name: "",
      Number: "",
      CompanyName: "",
      HRName: loggedInHRName,
      DOJ: "",
      Status: "",
      PayBackDays: "",
    });
  };

  const handleEdit = (candidate) => {
    setEditingStatus(candidate.Status);
    setEditingcandidateId(candidate._id);
  }

  const handleSave =  async(candidateId) =>{
    try{
      await axios.put(
        `${url}/api/candidates/update-status/${candidateId}`,
        { Status: editingStatus },
        { withCredentials: true }
      );
      setCandidate((prevCandidate) =>
      prevCandidate.map((cand) =>
        cand._id === candidateId? {...cand, Status: editingStatus } : cand
      ));
      setEditingStatus("");
      setEditingcandidateId(null);
      toast.success("Status updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  }
  return (
    <>
      <div className={styled.head}>
        <h1>Follow Ups</h1>
      </div>
      <div className={styled.wrapper}>
        <div className={styled.updatehead}>
          <h1>Candidate Status Update</h1>
        </div>
        <div className={styled.update}>
          <div className={styled.form}>
            <input
              type="text"
              name="name"
              placeholder="Candidate Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="Number"
              placeholder="Contact Number"
              value={formData.Number}
              onChange={handleChange}
            />
            <select
              name="CompanyName"
              value={formData.CompanyName}
              onChange={handleChange}
            >
              <option value="">Select Company</option>
              {companyNames.map((company) => (
                <option key={company._id} value={company.companyname}>
                  {company.companyname}
                </option>
              ))}
            </select>

            <select
              name="HRName"
              value={formData.HRName}
              onChange={handleChange}
              disabled={true}
            >
              <option value={loggedInHRName}>{loggedInHRName}</option>
            </select>

            <input
              type="date"
              name="DOJ"
              placeholder="Date of Joining"
              value={formData.DOJ}
              onChange={handleChange}
            />

            <select
              name="Status"
              value={formData.Status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Interested">Interested</option>
              <option value="Walk-in">Walk-In</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
              <option value="Hold">Hold</option>
              <option value="Drop">Drop</option>
              <option value="Active">Active</option>
            </select>

            <input
              type="number"
              name="PayBackDays"
              placeholder="Payback Days"
              value={formData.PayBackDays}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className={styled.info}>
        <div className={styled.infohead}>
          <h1>Candidate Information</h1>
        </div>
        <table id="candidateTable" className={styled.candidateTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Company</th>
              <th>HR Name</th>
              <th>Date of Joining</th>
              <th>Pay Back Days</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {candidate.map((cand) => (
              <tr key={cand._id}>
                <td>{cand.name}</td>
                <td>{cand.Number}</td>
                <td>{cand.CompanyName}</td>
                <td>{cand.HRName}</td>
                <td>{cand.DOJ}</td>
                <td>{cand.PayBackDays}</td>
                <td>
                  {editingcandidateId === cand._id ? (
                    <select value={editingStatus} onChange={(e)=> setEditingStatus(e.target.value)}>
                      <option value="Interested">Interested</option>
                      <option value="Walk-in">Walk-In</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Hold">Hold</option>
                      <option value="Drop">Drop</option>
                      <option value="Active">Active</option>
                    </select>
                  ) : (
                    cand.Status
                  )}
                </td>
                {editingcandidateId === cand._id ? (
                  <td>
                    <button onClick={() => handleSave(cand._id)}>Save</button>
                  </td>
                ) : (
                  <td>
                    <button onClick={() => handleEdit(cand)}>Edit</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Followups;
