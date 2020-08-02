<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="view">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease ;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter, .view-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.view-enter-to, .view-leave {
  opacity: 1;
  transform: translateY(0px);
}


</style>
