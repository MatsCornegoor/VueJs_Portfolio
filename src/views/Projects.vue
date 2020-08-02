<template>
  <div class="page">
    <h1>{{ id }}</h1>
    <p> {{projects.name}} </p>
    <p> {{projects.created_on}} </p>

  </div>
</template>

<script>
  import api from "../apiData.js"
  export default {
    props: ['id'],

    data(){
      return {
        projects: []
      }
    },
    mounted() {
      api.getProject(this.id)
        .then(data => (this.projects = data.data));
    } 

  }
</script>



