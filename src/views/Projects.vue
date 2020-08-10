<template>
  <div class="page">
    <h1 v-if="project.name !== null"> {{project.name}} </h1>
    <img v-if="project.image"  v-bind:src="project.image" /> 
    <p v-if="project.description" > {{project.description}} </p>

  </div>
</template>

<script>
  import api from "../apiData.js"
  export default {
    props: ['slug'],

    data(){
      return {
        project: [],
      }
    },
    created() {
      api.getProject(this.slug)
        .then(data => {
          this.project = data;
        });
    } 
  }
</script>



