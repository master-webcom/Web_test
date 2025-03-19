import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/employee-project';

export const getEmployeeProjects = () => {
  return axios.get(apiUrl);
};

export const addEmployeeProject = (employeeProject) => {
  return axios.post(apiUrl, employeeProject);
};

export const deleteEmployeeProject = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};