<template>
  <div class="page">
    <div v-for="project in projects" :key="project.id">
      <div class="section">
        <div v-bind:class="project.position" class="project">
          <router-link v-bind:to="'/projects/' + project.slug ">
            <img v-if="project.image"  v-bind:src="project.image" /> 
          </router-link>
          <router-link v-bind:to="'/projects/' + project.slug ">
            <p>{{project.name}}</p>
          </router-link>
        </div>
      </div>
    </div>

    <div id="projectClone"> 
      <div v-for="project in projectsClone" :key="project.slug">
        <div class="section">
          <div v-bind:class="project.position" class="project">
            <router-link v-bind:to="'/projects/' + project.slug ">
              <img v-if="project.image"  v-bind:src="project.image" /> 
            </router-link>
            <router-link v-bind:to="'/projects/' + project.slug ">
              <p>{{project.name}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import api from "../apiData.js";

  let scrolling = 1;
  let scroll;

  function autoScroll() {
    console.log("startScroll");
    scroll = setInterval(scroller, 20);
  }

  function scroller() {
    if (scrolling == 1) {
      window.scrollBy(0,1);
    }
    let projectClone = document.getElementById("projectClone");
    if (projectClone.getBoundingClientRect().top <= 0) {
      window.scrollTo(0, 0);
    }
  }

  function stopAutoScroll() {
    console.log("stopScroll");
    clearInterval(scroll);
  }

 

  export default {

    data(){
      return {
        projects: [],
      }
    },
    computed: {
      projectsClone(){ return this.projects.slice(0,3) }
    },
    
    mounted() {
      api.getProjects()
        .then(data => {
          this.projects = data;
        });

      autoScroll()
    },
    destroyed(){
      stopAutoScroll()
    }
  }
</script>

<style>

  .project {
    max-width: 500px;
    background-color: white;
  }

  .project a {
    padding: 0;
  }

  .right {
    float: right;
  }

  .center {
    margin: 0 auto;
  }

</style>
