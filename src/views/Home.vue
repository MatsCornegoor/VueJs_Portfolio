<template>
  <div class="home page">
    <h1>hey, this is the home page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deleniti error officia autem, ipsa laudantium dignissimos ut odit temporibus saepe labore ipsum quos tempore animi at iste expedita suscipit natus quidem tenetur explicabo voluptatem minima. Voluptas exercitationem perspiciatis iusto doloribus, iure harum quod voluptatibus explicabo culpa quas temporibus reprehenderit illo sunt consectetur a, debitis distinctio, magnam quos. Facilis, doloribus nobis!hey</p>

    <div v-for="project in projects" :key="project">
      <!-- <router-link :to="{ name: 'Projects', params: { id: project.name }}">{{project.name}}</router-link> -->

      <router-link v-bind:to="'/projects/' + project.id ">{{project.name}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        projects: [],
      }
    },
    methods: {
      getData() {
        fetch("http://admin.matscornegoor.nl/mats/items/projects")
          .then(response => response.json())
          .then(data => (this.projects = data.data));
      }
    },
    mounted() {
      this.getData()
    } 
  }
</script>
