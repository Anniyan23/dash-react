import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SubHeader from './components/SubHeader';  // Corrected import
import FilterSection from './components/FilterSection';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    jobTitle: '',
    experience: '',
    location: '',
    jobType: '',
    jobPreferences: '',
    skills: '',
    certification: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <SubHeader />  {/* Updated component name */}
        <FilterSection onFilterChange={handleFilterChange} />
        <MainContent filters={filters} />
      </div>
    </div>
  );
}

export default App;
