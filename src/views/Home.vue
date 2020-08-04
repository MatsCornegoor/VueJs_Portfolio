<template>
  <div class="page">
    <h1>hey, this is the home page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deleniti error officia autem, ipsa laudantium dignissimos ut odit temporibus saepe labore ipsum quos tempore animi at iste expedita suscipit natus quidem tenetur explicabo voluptatem minima. Voluptas exercitationem perspiciatis iusto doloribus, iure harum quod voluptatibus explicabo culpa quas temporibus reprehenderit illo sunt consectetur a, debitis distinctio, magnam quos. Facilis, doloribus nobis!hey</p>

    <div v-for="project in projects" :key="project.id">
      <router-link v-bind:to="'/projects/' + project.id ">{{project.name}}</router-link>
      <div v-for="data in project.image" :key="data.full_url" >
        <img v-bind:src="data.full_url" /> 
      </div>
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
          this.projects = data.data;
          // console.log(data.data);
        });
    } 
  }
</script>
