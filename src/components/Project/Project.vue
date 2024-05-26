<template>
  <div class="projects">
    <h1>Projects List</h1>
    <div class="action-buttons">
      <button @click="goToAddProject">Add Project</button>
      <button @click="goToDeleteProject">Delete Project</button>
      <button @click="goToUpdateProject">Update Project</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>StartDate</th>
          <th>EndDate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project) in filteredProjects" :key="project.projectID">
          <td>{{ project.projectName }}</td>
          <td>{{ project.startDate }}</td>
          <td>{{ project.endDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'Project',
  data() {
    return {
      filteredProjects: []
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch('https://localhost:7203/api/Project/GetProjectDetails');
        if (!response.ok) {
          throw new Error('Unable to connect to the network');
        }
        const data = await response.json();
        this.filteredProjects = data;
      } catch (error) {
        console.error('Error fetching projects:', error);
        alert('Error fetching projects: ' + error.message);
      }
    },
    goToAddProject() {
      this.$router.push({ path: '/push-project' });
    },
    goToDeleteProject() {
      this.$router.push({ path: '/delete-project' });
    },
    goToUpdateProject() {
      this.$router.push({ path: '/update-project' });
    },
    goToProjectDetail(projectID) {
      this.$router.push({ path: `/project-detail/${projectID}` });
    }
  }
};
</script>

<style scoped>
.projects {
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
</style>
