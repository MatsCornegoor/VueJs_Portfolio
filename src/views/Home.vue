<template>
  <div class="home page">
   <h1>hey, this is the home page</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deleniti error officia autem, ipsa laudantium dignissimos ut odit temporibus saepe labore ipsum quos tempore animi at iste expedita suscipit natus quidem tenetur explicabo voluptatem minima. Voluptas exercitationem perspiciatis iusto doloribus, iure harum quod voluptatibus explicabo culpa quas temporibus reprehenderit illo sunt consectetur a, debitis distinctio, magnam quos. Facilis, doloribus nobis!hey</p>

   <router-link to="/projects/1">Project1</router-link> 
   <br>
   <router-link to="/projects/2">Project2</router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
  data (){
    return {
      projects: []
    }
  }

}
</script>
