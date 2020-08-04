<template>
  <div class="page">
    <h1> {{project.name}} </h1>
    <img v-bind:src="projectMedia.full_url" /> 
    <p> {{project.description}} </p>

  </div>
</template>

<script>
  import api from "../apiData.js"
  export default {
    props: ['id'],

    data(){
      return {
        project: [],
        projectMedia: []
      }
    },
    mounted() {
      api.getProject(this.id)
        .then(data => {
            this.project = data.data;
            api.getProjectMedia(data.data.image)
              .then(data => (this.projectMedia = data.data.data));
        });
    } 
  }
</script>



