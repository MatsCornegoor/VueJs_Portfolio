<template>
  <div class="page">
    <!-- <h1>{{id}}</h1> -->
    <h1> {{project.name}} </h1>
    <!-- <p> {{project.created_on}} </p> -->
    <img v-bind:src="projectMedia.full_url" /> 
    <p> {{project.description}} </p>

  </div>
</template>

<script>
  import api from "../apiData.js"
  // let imageId
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
            this.project = data.data
            api.getProjectMedia(data.data.image)
              .then(data => (this.projectMedia = data.data.data));
        });
    } 

  }
</script>



