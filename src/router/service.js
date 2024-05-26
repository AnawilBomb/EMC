import axios from 'axios';

const baseURL = 'https://localhost:7203/api';

const Service = {
  async PushEmployee(employee) {
    try {
      const response = await axios.post(`${baseURL}/Employee/PushEmployee`, employee);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add employee: ' + (error.response?.data?.message || error.message));
    }
  },

  async DeleteEmployee(EmployeeId) {
    try {
      const response = await axios.delete(`${baseURL}/Employee/DeleteEmployee/${EmployeeId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete employee: ' + (error.response?.data?.message || error.message));
    }
},
async GetEmployeeDetails() {
    try {
      const response = await axios.get(`${baseURL}/Employee/GetEmployeeDetails`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch employees: ' + (error.response?.data?.message || error.message));
    }
  },

  async UpdateEmployee(employee) {
    try {
      const response = await axios.put(`${baseURL}/Employee/UpdateEmployee/${employee.EmployeeId}`, employee);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update employee: ' + (error.response?.data?.message || error.message));
    }
  },
  async PushDepartment(department) {
    try {
      const response = await axios.post(`${baseURL}/Department/PushDepartment`, department);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add department: ' + (error.response?.data?.message || error.message));
    }
  },
  async DeleteDepartment(DepartmentID) {
    try {
      const response = await axios.delete(`${baseURL}/Department/DeleteDepartment/${DepartmentID}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete department: ' + (error.response?.data?.message || error.message));
    }
},
async GetDepartmentDetails() {
    try {
      const response = await axios.get(`${baseURL}/Department/GetDepartmentDetails`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch department: ' + (error.response?.data?.message || error.message));
    }
  },
  async PushProject(project) {
    try {
      const response = await axios.post(`${baseURL}/Project/PushProject`, project);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add project: ' + (error.response?.data?.message || error.message));
    }
  },
  async DeleteProject(ProjectId) {
    try {
      const response = await axios.delete(`${baseURL}/Project/DeleteProject/${ProjectId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete Project: ' + (error.response?.data?.message || error.message));
    }
},
async GetProjectDetails() {
    try {
      const response = await axios.get(`${baseURL}/Project/GetProjectDetails`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch project: ' + (error.response?.data?.message || error.message));
    }
  },
};

export { Service };
