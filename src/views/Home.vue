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

  function autoScroll() {
    let scrolling = 1;
    let projectClone = document.getElementById("projectClone");
    if(scrolling == 1){
      setInterval(function(){
        // console.log("run");
        window.scrollBy(0,1);
        if (projectClone.getBoundingClientRect().top <= 0) {
          window.scrollTo(0, 0);
        }
      },20);
    }  
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
    // methods : {
    //   autoScroll : function(){  
    //     let scrolling = 1;
    //     let projectClone = document.getElementById("projectClone");
    //     console.log(this.$route.fullpath);
    //     if(scrolling == 1 && this.$route.name == 'Home'){
    //       setInterval(function(){
    //         window.scrollBy(0,1);
    //         if (projectClone.getBoundingClientRect().top <= 0) {
    //           window.scrollTo(0, 0);
    //         }
    //       },20);
    //     } 
    //   }
    // },
    mounted() {
      api.getProjects()
        .then(data => {
          this.projects = data;
        });

      autoScroll()
      // this.autoScroll()
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
