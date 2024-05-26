<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item logo" to="/">
            <img src="@/assets/teamwork.png" width="30" height="30">
              Employee Command Center 
          </router-link>
        </div>
        <div id="navbar-menu-container">
          <div class="navbar-menu">
            <router-link class="navbar-item" to="/employees" :class="{ 'active': $route.path === '/employees' }">Employees</router-link>
            <router-link class="navbar-item" to="/departments" :class="{ 'active': $route.path === '/departments' }">Departments</router-link>
            <router-link class="navbar-item" to="/projects" :class="{ 'active': $route.path === '/projects' }">Projects</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #132163;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

#navbar-menu-container {
  display: flex;
  align-items: center; 
}

.navbar-menu {
  display: flex;
}

.navbar-item {
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
}

.navbar-item.active {
  color: orange;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px; 
  transition: background-color 0.3s ease; 
}
</style>
