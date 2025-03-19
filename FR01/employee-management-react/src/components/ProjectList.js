import React, { useEffect, useState } from 'react';
import { deleteProject, getProjects } from '../services/projectService';

import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      if (response.data && response.data.length > 0) {
        setProjects(response.data);
      } else {
        setProjects(getPlaceholderData()); // Show placeholder data if no projects
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects(getPlaceholderData()); // Fallback to placeholder data on error
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects(); // Refresh the list after deleting
  };

  const getPlaceholderData = () => {
    return [
      {
        projectId: '1',
        name: 'Sample Project 1',
        startDate: '2024-01-01',
        endDate: '2024-06-30',
      },
      {
        projectId: '2',
        name: 'Sample Project 2',
        startDate: '2024-02-01',
        endDate: '2024-07-15',
      },
      {
        projectId: '3',
        name: 'Sample Project 3',
        startDate: '2024-03-01',
        endDate: '2024-08-20',
      },
      {
        projectId: '4',
        name: 'Sample Project 4',
        startDate: '2024-04-01',
        endDate: '2024-09-20',
      },
    ];
  };

  return (
    <div className="container">
      <h2>Project List</h2>
      <Link to="/projects/add" className="btn btn-primary mb-3">Add Project</Link>

      {/* Show loading state while fetching data */}
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan="4">No projects available</td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.projectId}>
                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>
                    <Link to={`/projects/edit/${project.projectId}`} className="btn btn-warning btn-sm me-2">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(project.projectId)} className="btn btn-danger btn-sm">
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

export default ProjectList;
