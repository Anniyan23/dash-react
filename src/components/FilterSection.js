import React, { useState } from 'react';
import './FilterSection.css';

const FilterSection = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    jobTitle: '',
    experience: '',
    location: '',
    jobType: '',
    jobPreferences: '',
    skills: '',
    certification: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <>
      <div className="filter-section">
        <img className="filterIcon" width="15px" src="https://img.icons8.com/ios/50/filter--v1.png" alt="filter--v1" />
        <p>FILTER:</p>
        <select name="jobTitle" className="filter-select" value={filters.jobTitle} onChange={handleChange}>
          <option value="">Job Title</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>
        <select name="experience" className="filter-select" value={filters.experience} onChange={handleChange}>
          <option value="">Experience</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
        </select>
        <select name="location" className="filter-select" value={filters.location} onChange={handleChange}>
          <option value="">Location</option>
          <option value="ny">New York</option>
          <option value="sf">San Francisco</option>
        </select>
        <select name="jobType" className="filter-select" value={filters.jobType} onChange={handleChange}>
          <option value="">Job Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
        </select>
        <select name="jobPreferences" className="filter-select" value={filters.jobPreferences} onChange={handleChange}>
          <option value="">Job Preferences</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
        </select>
        <select name="skills" className="filter-select" value={filters.skills} onChange={handleChange}>
          <option value="">Skills</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="Angular">Angular</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="Node.js">Node.js</option>
        </select>
        <select name="certification" className="filter-select" value={filters.certification} onChange={handleChange}>
          <option value="">Certification</option>
          <option value="certified">Certified</option>
          <option value="not-certified">Not Certified</option>
        </select>
        <div className='dwld'>
          <img width="26" height="26" src="https://img.icons8.com/metro/26/downloads-folder.png" alt="downloads-folder" />
        </div>
      </div>
      <div className='showhead'>
        <h2>Showing Top Profiles</h2>
      </div>
    </>
  );
};

export default FilterSection;
