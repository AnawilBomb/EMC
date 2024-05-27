<template>
  <div class="delete-department">
    <div class="header">
      <h1>Delete Department</h1>
      <router-link class="back-button" to="/departments">Back</router-link>
    </div>
    <form @submit.prevent="deleteDepartment">
      <div class="form-group">
        <label for="departmentID">Enter Department ID:</label>
        <input type="text" v-model="selectedDepartment" required>
      </div>
      <button type="submit">Delete</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Service } from '@/router/service';

const selectedDepartment = ref(null);
const departments = ref([]);
const error = ref(null);
const success = ref(null);

const fetchDepartments = async () => {
  try {
    const response = await Service.GetDepartmentDetails();
    departments.value = response;
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(fetchDepartments);

const deleteDepartment = async () => {
  try {
    error.value = null;
    success.value = null;
    await Service.DeleteDepartment(selectedDepartment.value);
    success.value = 'Department deleted successfully.';
    // Refetch departments after deletion to update the list
    await fetchDepartments();
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style scoped>
.delete-department {
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

input {
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

.success {
  color: green;
  text-align: center;
  margin-top: 20px;
}
</style>
