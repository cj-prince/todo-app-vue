<template>
  <nav>
    <p>Todo</p>
    <div class="n-links">
      <router-link to="/">Home</router-link> 
      <router-link to="/todo">Todo</router-link>
      <router-link to="/product">Product</router-link>
    </div>
    
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
body{
  background:#DBDBDB;
}
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}

nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  background: #FFFFFF;
  border-radius: 8px; 
  padding-inline: 42px;
}

.n-links{
  display: flex;
  gap: 20px;
  color: black;
}

a{
text-decoration: none;
}
</style>
