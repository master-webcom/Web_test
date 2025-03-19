import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/project';

export const getProjects = () => {
  return axios.get(apiUrl);
};

export const getProjectById = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const addProject = (project) => {
  return axios.post(apiUrl, project);
};

export const updateProject = (id, project) => {
  return axios.put(`${apiUrl}/${id}`, project);
};

export const deleteProject = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};