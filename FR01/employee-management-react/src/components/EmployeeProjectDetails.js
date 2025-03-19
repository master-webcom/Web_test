import React, { useEffect, useState } from 'react';
import { deleteEmployeeProject, getEmployeeProjects } from '../services/employeeProjectService';

const EmployeeProjectDetails = () => {
  const [employeeProjects, setEmployeeProjects] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state

  useEffect(() => {
    fetchEmployeeProjects();
  }, []);

  const fetchEmployeeProjects = async () => {
    try {
      const response = await getEmployeeProjects();
      if (response.data && response.data.length > 0) {
        setEmployeeProjects(response.data);
      } else {
        setEmployeeProjects(getPlaceholderData()); // Show placeholder data if no projects
      }
    } catch (error) {
      console.error("Error fetching employee projects:", error);
      setEmployeeProjects(getPlaceholderData()); // Fallback to placeholder data on error
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  const handleDelete = async (id) => {
    await deleteEmployeeProject(id);
    fetchEmployeeProjects(); // Refresh the list after deleting
  };

  const getPlaceholderData = () => {
    return [
      {
        employeeProjectId: '1',
        employeeId: 'E001',
        projectId: 'P001',
      },
      {
        employeeProjectId: '2',
        employeeId: 'E002',
        projectId: 'P002',
      },
      {
        employeeProjectId: '3',
        employeeId: 'E003',
        projectId: 'P003',
      },
    ];
  };

  return (
    <div className="container">
      <h2>Employee Project Details</h2>

      {/* Show loading state while fetching data */}
      {loading ? (
        <p>Loading employee projects...</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Project ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeProjects.length === 0 ? (
              <tr>
                <td colSpan="3">No employee projects available</td>
              </tr>
            ) : (
              employeeProjects.map(ep => (
                <tr key={ep.employeeProjectId}>
                  <td>{ep.employeeId}</td>
                  <td>{ep.projectId}</td>
                  <td>
                    <button onClick={() => handleDelete(ep.employeeProjectId)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeProjectDetails;
