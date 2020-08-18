<template>
  <div class="page">
    <h1 v-if="project.name !== null"> {{project.name}} </h1>
    <p class="textWrap" v-if="project.description" > {{project.description}} </p>
    <div class="section imageGrid">
      <div v-for="(image,index) in project.images" :key="index">
        <img v-bind:src="image" />
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    props: ['slug'],

    computed: {
      project(){ return this.$store.state.project},
    },

    created() {
      this.$store.dispatch('GET_PROJECT',this.slug)
    } 
  }
</script>

<style>
  .imageGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

</style>



