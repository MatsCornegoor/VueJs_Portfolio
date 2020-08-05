<template>
  <div class="page">
    <h1 v-if="project.name !== null"> {{project.name}} </h1>
    <!-- <img v-if="project.image == data" v-bind:src="project.image.data.full_url" />  -->
    <div v-for="data in project.image" :key="data.full_url" >
      <img v-bind:src="data.full_url" /> 
    </div>
    <p v-if="project.description !== null"> {{project.description}} </p>
    <div v-for="data in project.images" :key="data.full_url" >
      <img v-bind:src="data.full_url" /> 
    </div>

  </div>
</template>

<script>
  import api from "../apiData.js"
  export default {
    props: ['id'],

    data(){
      return {
        project: [],
      }
    },
    mounted() {
      api.getProject(this.id)
        .then(data => {
            this.project = data.data;
        });
    } 
  }
</script>



