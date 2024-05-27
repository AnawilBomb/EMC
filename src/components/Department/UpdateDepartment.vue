<template>
    <div class="update-department">
      <div class="header">
        <h1>Update Department</h1>
        <router-link class="back-button" to="/departments">Back</router-link>
      </div>
      <form @submit.prevent="updateDepartment">
        <div class="form-group">
          <label for="departmentID">Department ID:</label>
          <input type="number" id="departmentID" v-model="department.departmentID" required />
        </div>
        <div class="form-group">
          <label for="name">Department Name:</label>
          <input type="text" id="name" v-model="department.name" required />
        </div>
        <div class="form-group">
          <label for="managerID">Manager ID:</label>
          <input type="number" id="managerID" v-model="department.managerID" required />
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
  
  const department = ref({
    departmentID: '',
    name: '',
    managerID: ''
  });
  
  const error = ref(null);
  
  const updateDepartment = async () => {
    try {
      error.value = null;
      await Service.UpdateDepartment(department.value);
      department.value = {
        departmentID: '',
        name: '',
        managerID: ''
      };
      router.push('/departments');
    } catch (err) {
      error.value = err.message;
    }
  };
  </script>
  
  <style scoped>
  .update-department {
    padding: 20px;
    max-width: 500px;
    margin: 60px auto;
    background-color: #ff6600;
    border: 2px solid #132163;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .back-button {
    background-color: #132163;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
  }
  
  .back-button:hover {
    background-color: #0f1a4d;
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
  
  input,
  select {
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
  