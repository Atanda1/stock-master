<template>
<div>
  <header id="header">
    <div class="logo">
      <router-link to="/">Vue Authenticate</router-link>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/stock">Stock page</router-link>
        </li>
        <li>
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        
      </ul>
    </nav>
  </header>
 </div>
</template>

<script>
  export default {
    computed: {
     
    },
    methods: {
      
    }
  }
</script>
<style scoped>

 * {
   cursor: pointer;
 }
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color:#747080;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: black;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa9f;
  }
</style>