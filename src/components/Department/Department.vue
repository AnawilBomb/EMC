<template>
  <div class="departments">
    <h1>Departments List</h1>
    <div class="search-box">
      <div class="search-input-container">
        <input type="text" v-model="searchQuery" placeholder="Search Department Name" class="search-input">
        <span class="search-icon"><i class="fas fa-search"></i></span>
      </div>
    </div>
    <div class="action-buttons">
      <button @click="goToAddDepartment">Add Department</button>
      <button @click="goToDeleteDepartment">Delete Department</button>
      <button @click="goToUpdateDepartment">Update Department</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Department Name</th>
          <th>Manager ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(department) in filtereddepartments" :key="department.departmentID">
          <td>{{ department.name }}</td>
          <td>{{ department.managerID }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Department',
  data() {
    return {
      departments: [],
      searchQuery: ''
    };
  },
  computed: {
    filtereddepartments() {
      return this.departments.filter(department =>
        department.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    this.fetchDepartments();
  },
  methods: {
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
    goToAddDepartment() {
      this.$router.push({ path: '/push-department' });
    },
    goToDeleteDepartment() {
      this.$router.push({ path: '/delete-department' });
    },
    goToUpdateDepartment() {
      this.$router.push({ path: '/update-department' });
    },
    goToDepartmentDetail(departmentID) {
      this.$router.push({ path: `/department-detail/${departmentID}` });
    }
  }
};
</script>

<style scoped>
.departments {
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
</style>
