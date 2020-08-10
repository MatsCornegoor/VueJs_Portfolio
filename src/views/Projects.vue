<template>
  <div class="page">
    <h1 v-if="project.name !== null"> {{project.name}} </h1>
    <img v-if="project.image"  v-bind:src="project.image" /> 
    <p v-if="project.description" > {{project.description}} </p>

    <div v-for="(image,index) in project.images" :key="index">
      <img v-bind:src="image" />
      <p>hoi</p>
    </div>

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
    mounted() {
      api.getProject(this.slug)
        .then(data => {
          this.project = data;
          // console.log(data)
        });
    } 
  }
</script>



