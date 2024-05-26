<template>
  <div class="employees">
    <h1>Employees List</h1>
    <div class="search-box">
      <div class="search-input-container">
        <input type="text" v-model="searchQuery" placeholder="Search Name Here" class="search-input">
        <span class="search-icon"><i class="fas fa-search"></i></span>
      </div>
    </div>
    <div class="action-buttons">
      <button @click="goToAddEmployee">Add Employee</button>
      <button @click="goToDeleteEmployee">Delete Employee</button>
      <button @click="goToUpdateEmployee">Update Employee</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Gender</th>
          <th>Email</th>
          <th>JobTitle</th>
          <th>ProjectName</th>
          <th>DepartmentName</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in filteredEmployees" :key="employee.EmployeeID">
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.jobTitle }}</td>
          <td>{{ employee.projectName }}</td>
          <td>{{ employee.departmentName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Employee',
  data() {
    return {
      employees: [],
      departments: [], 
      searchQuery: '',
      searchDepartment: '' 
    };
  },
  created() {
    this.fetchEmployees();
    this.fetchDepartments();
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await fetch('https://localhost:7203/api/Employee/GetEmployeeDetails');
        if (!response.ok) {
          throw new Error('Unable to connect to the network');
        }
        const data = await response.json();
        this.employees = data;
      } catch (error) {
        console.error('Error fetching employees:', error);
        alert('Error fetching employees: ' + error.message);
      }
    },
    async fetchDepartments() {
      try {
        const response = await fetch('https://localhost:7203/api/Department/GetDepartmentDetails');
        if (!response.ok) {
          throw new Error('Unable to connect to the network');
        }
        const data = await response.json();
        this.departments = data;
      } catch (error) {
        console.error('Error fetching departments:', error);
        alert('Error fetching departments: ' + error.message);
      }
    },
    goToAddEmployee() {
      this.$router.push({ path: '/push-employee' });
    },
    goToDeleteEmployee() {
      this.$router.push({ path: '/delete-employee' });
    },
    goToUpdateEmployee() {
      this.$router.push({ path: '/update-employee' });
    }
  },
  computed: {
    uniqueDepartments() {
      return [...new Set(this.departments.map(department => department.departmentName))];
    },
    filteredEmployees() {
      const query = this.searchQuery.toLowerCase();
      const selectedDepartment = this.searchDepartment.toLowerCase();
      return this.employees.filter(employee => {
        const departmentName = employee.departmentName.toLowerCase();
        return (selectedDepartment === '' || departmentName === selectedDepartment) &&
               (query === '' || employee.firstName.toLowerCase().includes(query) || employee.lastName.toLowerCase().includes(query));
      });
    }
  }
};
</script>

<style scoped>
.employees {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: #ff6600; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 30px;
  color: #132163;
  font-size: 28px;
  text-transform: uppercase;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #132163;
  color: white;
  font-weight: bold;
}

tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
  background-color: #e3ecf2;
}

tbody tr:hover {
  background-color: #ddd;
}

/* Styles for the search box */
.search-box {
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
}

.search-select {
  margin-right: 15px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffff;
}

.search-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 10px 20px;
  padding-right: 40px; /* Make room for the icon */
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
  background-color: #ffffff;
}

.search-icon {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
  font-size: 18px;
}

/* Styles for the action buttons */
.action-buttons {
  margin: 20px 0;
  display: flex;
  gap: 15px;
}

.action-buttons button {
  background-color: #132163;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.action-buttons button:hover {
  background-color: #0f1a4d;
}
</style>
