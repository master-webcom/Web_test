import React, { useEffect, useState } from 'react';
import { getProjectById, updateProject } from '../services/projectService';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Replaced useHistory with useNavigate
  const [project, setProject] = useState({ name: '', startDate: '', endDate: '' });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjectById(id);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]); // ✅ Added id as a dependency

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProject(id, project);
      navigate('/projects'); // ✅ Replaced history.push with navigate
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={project.startDate}
            onChange={(e) => setProject({ ...project, startDate: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            value={project.endDate}
            onChange={(e) => setProject({ ...project, endDate: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default ProjectEdit;
