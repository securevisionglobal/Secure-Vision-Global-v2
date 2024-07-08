import React, { useState, useEffect } from "react";
import styled from "./Followups.module.css";
import axios from "axios";
import { toast } from "react-toastify";
function Followups({url}) {
  
  const [companyname, setCompanyname] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [formDisabled, setFormDisabled] = useState(true);
  const [hrNames, setHrNames] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentCandidateId, setCurrentCandidateId] = useState(null);
  const [search, setSearch] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    Number: "",
    CompanyName: "",
    HRName: "",
    DOJ: "",
    Status: "",
    PayBackDays: "",
  });

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`${url}/api/companyname/`);
        if (Array.isArray(res.data)) {
          setCompanyList(res.data);
        } else {
          console.error("Unexpected response data:", res.data);
          toast.error("Failed to fetch company names.");
        }
      } catch (error) {
        console.error("Error fetching company names:", error);
        toast.error("Failed to get company list");
      }
    };
    fetchCompany();

    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          `${url}/api/candidates/get-all`,
          { withCredentials: true }
        );
        setCandidates(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching candidates");
        return;
      }
    };

    fetchCandidates();

    const fetchHRNames = async () => {
      try {
        const response = await axios.get(
          `${url}/api/admin/getallusers`,
        );
        setHrNames(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching HR names");
        return;
      }
    };

    fetchHRNames();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const addCompany = async () => {
    if (!companyname) {
      toast.error("Company name cannot be empty");
      return;
    }
    try {
      const response = await axios.post(
        `${url}/api/companyname/add`,
        { companyname },
        { withCredentials: true }
      );
      if (response.data && response.data.CompanyName) {
        setCompanyList([...companyList, response.data.CompanyName]);
        setCompanyname("");
        toast.success("Company name added successfully.");
      } else {
        console.error("Unexpected response data:", response.data);
        toast.error("Failed to add company name.");
      }
    } catch (error) {
      toast.error("Failed to Add Company");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/api/companyname/delete/${id}`, {
        withCredentials: true,
      });
      setCompanyList(companyList.filter((company) => company._id !== id));
      toast.success("Company deleted successfully.");
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete company. Please try again later.");
    }
  };

  const handleEdit = (candidate) => {
    setFormData({
      name: candidate.name,
      Number: candidate.Number,
      CompanyName: candidate.CompanyName,
      HRName: candidate.HRName,
      DOJ: candidate.DOJ,
      Status: candidate.Status,
      PayBackDays: candidate.PayBackDays,
    });
    setFormDisabled(false);
    setCurrentCandidateId(candidate._id);
    setEditMode(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.Number ||
      !formData.CompanyName ||
      !formData.HRName ||
      !formData.DOJ ||
      !formData.Status ||
      !formData.PayBackDays
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      if (editMode) {
        await axios.put(
          `${url}/api/candidates/update/${currentCandidateId}`,
          formData,
          { withCredentials: true }
        );
        setEditMode(false);
        setFormDisabled(true);

        //update the candidates array
        const updatedCandidates = candidates.map((candidate) =>
          candidate._id === currentCandidateId ? { ...candidate, ...formData } : candidate
        );
        setCandidates(updatedCandidates);
        toast.success("Candidate updated successfully.");
        setFormData({
          name: "",
          Number: "",
          CompanyName: "",
          HRName: "",
          DOJ: "",
          Status: "",
          PayBackDays: "",
        })
      } 
    } catch (error) {
      console.error(error);
      toast.error("Error submitting candidate data");
    }
  };

  return (
    <>
      <div className={styled.head}>
        <h1>Follow Ups</h1>
      </div>
      <div className={styled.addCompany}>
        <input
          type="text"
          name="companyname"
          placeholder="Add Company Name here"
          value={companyname}
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <button onClick={addCompany}>Add</button>
      </div>
      <div className={styled.companylist}>
        {/* Map through company data and display */}
        {companyList.map((company) => (
          <div className={styled.comp} key={company._id}>
            <li>{company.companyname}</li>
            <button onClick={() => handleDelete(company._id)}>Delete</button>
          </div>
        ))}
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
              disabled={formDisabled}
            />

            <input
              type="text"
              name="Number"
              placeholder="Contact Number"
              value={formData.Number}
              onChange={handleChange}
              disabled={formDisabled}
            />
            <select
              name="CompanyName"
              value={formData.CompanyName}
              onChange={handleChange}
              disabled={formDisabled}
            >
              <option value="">Select Company</option>
              {companyList.map((company) => (
                <option key={company._id} value={company.companyname}>
                  {company.companyname}
                </option>
              ))}
            </select>

            <select
              name="HRName"
              value={formData.HRName}
              onChange={handleChange}
              disabled={formDisabled}
            >
              <option value={""}>Select HR</option>
              {hrNames.map((hr) => (
                <option key={hr._id} value={hr.name}>
                  {hr.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="DOJ"
              placeholder="Date of Joining"
              value={formData.DOJ}
              onChange={handleChange}
              disabled={formDisabled}
            />

            <select
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              disabled={formDisabled}
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
              disabled={formDisabled}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={formDisabled}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className={styled.info}>
        <div className={styled.infohead}>
          <h1>Candidate Information</h1>
        </div>

        <div className={styled.searchFilter}>
          <input
            type="text"
            placeholder="Search by HR Name"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
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
            {candidates.filter((candidate) => candidate.HRName.toLowerCase().includes(search)).map((candidate) => (
              <tr key={candidate._id}>
                <td>{candidate.name}</td>
                <td>{candidate.Number}</td>
                <td>{candidate.CompanyName}</td>
                <td>{candidate.HRName}</td>
                <td>{candidate.DOJ}</td>
                <td>{candidate.PayBackDays}</td>
                <td>{candidate.Status}</td>
                <td>
                  <button onClick={() => handleEdit(candidate)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Followups;
