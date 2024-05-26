<template>
  <div class="push-employee">
    <h1>Add New Employee</h1>
    <form @submit.prevent="submitEmployee">
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
        <input type="text" id="departmentID" v-model="employee.departmentID" required />
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title:</label>
        <select id="jobTitle" v-model="employee.jobTitle" required>
          <option value="Trainee">Trainee</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Lead Developer">Lead Developer</option>
          <option value="Front-end Developer">Front-end Developer</option>
          <option value="Back-end Developer">Back-end Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Automation Tester">Automation Tester</option>
          <option value="Technical Support Engineer">Technical Support Engineer</option>
          <option value="Scrum Master">Scrum Master</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Product Owner">Product Owner</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="System Analyst">System Analyst</option>
          <option value="Database Administrator (DBA)">Database Administrator (DBA)</option>
          <option value="Solution Architect">Solution Architect</option>
          <option value="Chief Technology Officer (CTO)">Chief Technology Officer (CTO)</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Mobile Developer">Mobile Developer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Data Engineer">Data Engineer</option>
          <option value="Machine Learning Engineer">Machine Learning Engineer</option>
          <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
          <option value="Cloud Engineer">Cloud Engineer</option>
          <option value="IT Support Specialist">IT Support Specialist</option>
          <option value="Technical Writer">Technical Writer</option>
          <option value="Business Analyst">Business Analyst</option>
        </select>
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

const employee = ref({
  firstName: '',
  lastName: '',
  email: '',
  gender: 'Other',
  departmentID: '',
  jobTitle: ''
});

const error = ref(null);

const submitEmployee = async () => {
  try {
    error.value = null;
    await Service.PushEmployee(employee.value);
    employee.value = {
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
.push-employee {
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
  border-radius:
  10px;
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
