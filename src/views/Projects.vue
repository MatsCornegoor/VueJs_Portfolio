<template>
  <div class="page">
    <h1>{{ id }}</h1>
    <p> {{projects.name}} </p>
    <p> {{projects.created_on}} </p>

  </div>
</template>

<script>
  export default {
    props: ['id'],

    data(){
      return {
        projects: [],
      }
    },
    // watch:{
    //   '$route' (to,from){
    //     this.getData()
    //   }
    // },
    methods: {
      getData() {
        // var that = this;
        fetch("http://admin.matscornegoor.nl/mats/items/projects/" + this.id)
          .then(response => response.json())
          .then(data => (this.projects = data.data));
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>



