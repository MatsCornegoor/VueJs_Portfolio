<template>
  <div id="app">
    <div id="menu">
      <div id="menuLinks">
        <router-link to="/">Projects</router-link>
        <router-link to="/about">About</router-link>
        <a href="mailto:m.cornegoor@gmail.com">Contact</a>
      </div>
      <div id="menuOptions">
        <!-- <button v-on:click="toggleAutoScroll">Scroll</button> -->
      </div>
    </div>
    <transition name="view">
      <keep-alive exclude="home">
        <router-view :key="$route.fullPath"/>
      </keep-alive>>
      <!-- <router-view/> -->
    </transition>
  </div>
</template>

<script>


  export default {
    // methods: {
    //   toggleAutoScroll: function() {
    //     console.log(scrolling);
    //     if(scrolling == 1){
    //       scrolling = 0;
    //     } else {
    //       scrolling = 1;
    //     }
    //     console.log(scrolling)
    //   }
    // },
    
    mounted() {
    }
  }
</script>

<style>
  /* General styles */
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  p, a {
    font-family: sans-serif;
    font-weight: normal;
    text-decoration: none;
    color: black;
    font-size: 20px;
    padding: 16px;
  }

  h1, h2 {
    font-family: sans-serif;
    font-weight: normal;
    color: black;
    font-size: 40px;
    line-height: 40px;
    padding: 16px;
  }

  img {
    width: 100%;
  }


  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Menu styles */
  #menu {
    position: fixed;
    z-index: 100;
  }

  #menuLinks {
    padding: 8px;
  }

  #menuOptions {
    bottom: 0;
    position: fixed;
    padding: 8px;
  }

  #menu a {
    display: block;
    padding: 8px;
  }

  #menu a:hover {
    color: blue;
  }

  #menu a.router-link-exact-active {
    color: blue;
  }




  /* Page styles */
  .page {
    width: calc(100% - 116px);
    float: right;
    /* background-color: yellow; */
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

  .section {
    width: 100%;
    padding: 16px;
    padding-top: 48px;
    position: relative;
    overflow: auto;
    /* background-color: green; */
  }

  .textWrap {
    max-width: 1200px;
  }


</style>
