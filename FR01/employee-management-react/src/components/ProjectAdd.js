import React, { useState } from 'react';

import { addProject } from '../services/projectService';
import { useNavigate } from 'react-router-dom';

const ProjectAdd = () => {
  const [project, setProject] = useState({ name: '', startDate: '', endDate: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(project);
    navigate('/projects');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Project</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            style={styles.input}
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Start Date</label>
          <input
            type="date"
            style={styles.input}
            value={project.startDate}
            onChange={(e) => setProject({ ...project, startDate: e.target.value })}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>End Date</label>
          <input
            type="date"
            style={styles.input}
            value={project.endDate}
            onChange={(e) => setProject({ ...project, endDate: e.target.value })}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    background: '#f8f9fa',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#343a40',
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default ProjectAdd;
