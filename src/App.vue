<template>
  <div id="app">
    <div id="menu">
      <div id="menuLinks">
        <router-link to="/">Projects</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div id="menuOptions">
        <button v-on:click="toggleAutoScroll">Scroll</button>
      </div>
    </div>
    <transition name="view">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  let scrolling = 1;
  // let projectsClone = document.getElementById("projectsClone");

  // function autoScroll() {
  //   if(scrolling == 1){
  //     setInterval(function(){
  //       window.scrollBy(0,1);
  //     },20);
  //   }
  //   if (projectsClone.getBoundingClientRect().top <= 0) {
  //     window.scrollTo(0, 0);
  //   }
  // }

  export default {
    methods: {
      toggleAutoScroll: function() {
        console.log(scrolling);
        if(scrolling == 1){
          scrolling = 0;
        } else {
          scrolling = 1;
        }
      }
    },
    mounted() {
      // autoScroll()
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
    font-size: 32px;
    line-height: 24px;
    padding: 16px;
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

  #menu a {
    display: block;
    padding: 8px;
  }

  #menu a.router-link-exact-active {
    color: #42b983;
  }


  /* Page styles */
  .page {
    width: calc(100% - 116px);
    float: right;
    background-color: yellow;
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
