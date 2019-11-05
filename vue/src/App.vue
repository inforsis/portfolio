<template>
  <body id="app">
    <input type="checkbox" autocomplete="off" v-on:change="randomFunFacs()" class="func-facts-check" id="checkFunFacts" style="display:none">
    <Side/>
    <main class="main-container animated">
      <router-view></router-view>
      <label class="fun-facts-icon" for="checkFunFacts" data-title="Fun Fact about me"></label>
    </main><!--.main-container-->
    <Loading/>
  </body>
</template>

<script>
import api from './api'
import Side from './components/side/Side.vue'
import Loading from './components/loading/Loading.vue'

export default {
  name: 'app',
  components: {
    Side,
    Loading
  },
  methods: {
    randomFunFacs: function(){
      api.get('funfacts')
      .then(function(response){
        var obj = (response.data);
        let min = 0;
        let max = obj.length;
        let i = Math.floor(Math.random() * (max - min)) + min; 
        document.getElementById('funFactID').innerHTML = i;
        document.getElementById('funFacts').innerHTML =  obj[i].title.rendered;
      })
    }
  }
}

</script>

<style lang="scss">
  
  // Material Design Icons
  @import './assets/fonts/material-design-icons/material-icons.css'; 

  //IBMPLEXSANS
  @import './assets/fonts/ibmplexsans/stylesheet.css'; 

  //Titillium Web
  @import './assets/fonts/titilliumweb/stylesheet.css';
  
  @import './assets/scss/main.scss';

  @import './assets/scss/objects/_main-container.scss';

  @import './assets/scss/objects/_page-section.scss';

</style>
