<template>
  <div class="page">
    <h1>hey, this is the home page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deleniti error officia autem, ipsa laudantium dignissimos ut odit temporibus saepe labore ipsum quos tempore animi at iste expedita suscipit natus quidem tenetur explicabo voluptatem minima. Voluptas exercitationem perspiciatis iusto doloribus, iure harum quod voluptatibus explicabo culpa quas temporibus reprehenderit illo sunt consectetur a, debitis distinctio, magnam quos. Facilis, doloribus nobis!hey</p>

    <div v-for="project in projects" :key="project.id">
      <router-link v-bind:to="'/projects/' + project.slug ">{{project.name}}</router-link>
      <img v-if="project.image"  v-bind:src="project.image" /> 
    </div>

  </div>
</template>

<script>
  import api from "../apiData.js";

  export default {
    data(){
      return {
        projects: [],
      }
    },
    mounted() {
      api.getProjects()
        .then(data => {
          this.projects = data;
          console.log(data)
        });
      
    } 
  }
</script>
