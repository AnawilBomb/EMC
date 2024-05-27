<template>
    <div class="update-project">
      <h1>Update Project</h1>
      <div class="back-button-container">
        <router-link class="back-button" to="/projects">Back</router-link>
      </div>
      <form @submit.prevent="updateProject">
        <!-- Project ID -->
        <div class="form-group">
          <label for="projectId">Project ID:</label>
          <input type="number" id="projectId" v-model="project.projectId" required />
        </div>
        <!-- Project Name -->
        <div class="form-group">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" v-model="project.projectName" required />
        </div>
        <div class="form-group">
          <label for="DepartmentID">DepartmentID:</label>
          <input type="number" id="DepartmentID" v-model="project.DepartmentID" required />
        </div>
        <div class="form-group">
          <label for="StartDate">Start Date:</label>
          <input type="datetime-local" id="StartDate" v-model="project.StartDate" required />
        </div>
        <div class="form-group">
          <label for="EndDate">End Date:</label>
          <input type="datetime-local" id="EndDate" v-model="project.EndDate" required />
        </div>
        <button type="submit">Update</button>
      </form>
      <!-- Error message -->
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Service } from '@/router/service';
  
  const router = useRouter();
  
  const project = ref({
    projectId: '',
    projectName: ''
  });
  
  const error = ref(null);
  
  const updateProject = async () => {
    try {
      error.value = null;
      await Service.UpdateProject(project.value);
      // Clear the form fields after successful update
      project.value = {
        projectId: '',
        projectName: ''
      };
      // Redirect to the projects page after updating
      router.push('/projects');
    } catch (err) {
      // Display error message if update fails
      error.value = err.message;
    }
  };
  </script>
  
  <style scoped>
  .update-project {
    padding: 20px;
    max-width: 500px;
    margin: 60px auto;
    background-color: #ff6600;
    border: 2px solid #132163;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .back-button-container {
    margin-left: auto;
    margin-top: -40px;
  }
  
  .back-button {
    background-color: #132163;
    color: #ffffff;
    padding: 8px 15px;
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
  