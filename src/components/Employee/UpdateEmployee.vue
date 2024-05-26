<template>
    <div class="update-employee">
      <h1>Update Employee</h1>
      <form @submit.prevent="updateEmployee">
        <div class="form-group">
          <label for="employeeID">Employee ID:</label>
          <input type="number" id="employeeID" v-model="employee.employeeID" required />
        </div>
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="employee.firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="employee.lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="employee.email" required />
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" v-model="employee.gender" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="LGBTQI">LGBTQI</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="departmentID">Department ID:</label>
          <input type="number" id="departmentID" v-model="employee.departmentID" required />
        </div>
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <select id="jobTitle" v-model="employee.jobTitle" required>
            <!-- Your options for job titles -->
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Service } from '@/router/service';
  
  const router = useRouter();
  
  const employee = ref({
    employeeID: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: 'Other',
    departmentID: '',
    jobTitle: ''
  });
  
  const error = ref(null);
  
  const updateEmployee = async () => {
    try {
      error.value = null;
      await Service.UpdateEmployee(employee.value);
      employee.value = {
        employeeID: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: 'Other',
        departmentID: '',
        jobTitle: ''
      };
      router.push('/employees');
    } catch (err) {
      error.value = err.message;
    }
  };
  </script>
  
  <style scoped>
  .update-employee {
    padding: 20px;
    max-width: 500px;
    margin: 60px auto;
    background-color: #ff6600;
    border: 2px solid #132163;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #132163;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
  }
  
  input, select {
    width: calc(100% - 20px);
    padding: 10px;
    margin: 0 10px;
    border: 1px solid #132163;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
  }
  
  button {
    background-color: #132163;
    color: #ffffff;
    padding: 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    width: calc(100% - 20px);
    margin: 0 10px;
  }
  
  button:hover {
    background-color: #0f1a4d;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  