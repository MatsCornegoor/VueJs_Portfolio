<template>
  <div class="page">
    <h1 class="textWrap">Mats Cornegoor is a digital artist located in Rotterdam who works at the intersection of design and technology. Within this practice he explores different types of media such as interactive installations, data visualisations, animation, generative art and web design.</h1>
    <div v-for="project in projects" :key="project.id">
      <div class="section">
        <div v-bind:class="project.position" class="project">
          <router-link v-bind:to="'/projects/' + project.slug ">
            <img v-if="project.image"  v-bind:src="project.image" /> 
          </router-link>
          <router-link v-bind:to="'/projects/' + project.slug ">
            <p class="left">{{project.name}}</p> <p class="right view">View -></p>
          </router-link>
        </div>
      </div>
    </div>

    <div id="projectClone"> 
      <h1 class="textWrap">Mats Cornegoor is a digital artist located in Rotterdam who works at the intersection of design and technology. Within this practice he explores different types of media such as interactive installations, data visualisations, animation, generative art and web design.</h1>
      <div v-for="project in projectsClone" :key="project.slug">
        <div class="section">
          <div v-bind:class="project.position" class="project">
            <router-link v-bind:to="'/projects/' + project.slug ">
              <img v-if="project.image"  v-bind:src="project.image" /> 
            </router-link>
            <router-link v-bind:to="'/projects/' + project.slug ">
              <p class="left">{{project.name}}</p> <p class="right view">View -></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  let scrolling = 2;
  let scroll;

  function autoScroll() {
    console.log("startScroll");
    scroll = setInterval(scroller, 20);
  }

  function scroller() {
    if (scrolling == 1) {
      window.scrollBy(0,1);
    }
    let projectClone = document.getElementById("projectClone");
    if (projectClone.getBoundingClientRect().top <= 0) {
      window.scrollTo(0, 0);
    }
  }

  function stopAutoScroll() {
    console.log("stopScroll");
    clearInterval(scroll);
  }

  export default {
    name: 'home',
    computed: {
      projects(){ return this.$store.state.projects},
      projectsClone(){ return this.$store.state.projects.slice(0,3) },
    },
    
    created() {
      this.$store.dispatch('GET_PROJECTS')
      autoScroll()
    },
    destroyed(){
      stopAutoScroll()
    }
  }
</script>

<style>

  .project {
    max-width: 550px;
    background-color: white;
    transition: 0.5s;
  }

  .project:hover{
    transform: translateY(-16px);
    transition: 0.5s;
  }

  .project p {
    padding-left: 0;
    padding-right: 0;
    padding-top: 8px;
  }

  .project a {
    padding: 0;
  }

  .view {
    opacity: 0;
    transform: translateX(-10px);
    transition: 0.5s;
  }

  .project:hover .view {
    opacity: 1;
    transform: translateX(0px);
    transition: 0.5s;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .center {
    margin: 0 auto;
  }

  /* .page::-webkit-scrollbar {
    display: none;
  }

  .page {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  } */


</style>
