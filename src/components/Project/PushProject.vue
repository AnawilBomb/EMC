<template>
    <div class="push-project">
      <h1>Add New Project</h1>
      <form @submit.prevent="submitProject">
        <div class="form-group">
          <label for="ProjectName">Project Name:</label>
          <input type="text" id="ProjectName" v-model="project.ProjectName" required />
        </div>
        <div class="form-group">
          <label for="DepartmentID">DepartmentID:</label>
          <input type="number" id="DepartmentID" v-model="project.DepartmentID" required />
        </div>
        <div class="form-group">
          <label for="StartDate">Start Date:</label>
          <input type="datetime" id="StartDate" v-model="project.StartDate" required />
        </div>
        <div class="form-group">
          <label for="EndDate">End Date:</label>
          <input type="datetime" id="EndDate" v-model="project.EndDate" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Service } from '@/router/service';
  
  const router = useRouter();
  
  const project = ref({
    ProjectName: '',
    DepartmentID: '',
    StartDate: '',
    EndDate: ''
  });
  
  const error = ref(null);
  
  const submitProject = async () => {
    try {
      error.value = null;
      await Service.PushProject(project.value);
      project.value = {
        ProjectName: '',
        DepartmentID: '',
        StartDate: '',
        EndDate: '',
      };
      router.push('/projects');
    } catch (err) {
      error.value = err.message;
    }
  };
  </script>
  
  <style scoped>
  .push-project {
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
  