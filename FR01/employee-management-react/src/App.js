import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import EmployeeProjectDetails from './components/EmployeeProjectDetails';
import Navbar from './components/Navbar';
import ProjectAdd from './components/ProjectAdd';
import ProjectEdit from './components/ProjectEdit';
import ProjectList from './components/ProjectList';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/add" element={<ProjectAdd />} />
          <Route path="/projects/edit/:id" element={<ProjectEdit />} />
          <Route path="/employee-projects" element={<EmployeeProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
