<template>
    <div class="EMC">
      <header class="header">
        <h1>Welcome to Employee Command Center</h1>
      </header>
      <img src="@/assets/teamwork.png" width="365" height="365">
      <section class="content">
        <h2>About Us</h2>
        <p>
          Welcome to our Employee Command Center. This platform helps manage employee data efficiently. 
          You can view the list of employees, their departments, and search for specific employees based on various criteria.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'EMC',
  };
  </script>
  
  <style scoped>
  .EMC {
    padding: 20px;
    text-align: center;
    background-color: #ff6600;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
  }
  
  .header {
    background-color: #132163;
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  
  .header h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  .nav li {
    display: inline;
    margin-right: 15px;
  }
  
  .nav a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav a:hover {
    text-decoration: underline;
  }
  
  .content {
    padding: 20px;
  }
  
  .content h2 {
    font-size: 22px;
    color: black;
  }
  
  .content p {
    font-size: 18px;
    color: white;
  }
  </style>
  