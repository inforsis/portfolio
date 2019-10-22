<template>
  <body id="app">
    <input type="checkbox" autocomplete="off" onchange="" class="func-facts-check" id="checkFunFacts" style="display:none">
    <Side/>
    <Home/>
  </body>
</template>

<script>
import axios from 'axios'

import Side from './components/side/Side.vue'
import Home from './components/home/Home.vue'

export default {
  name: 'app',
  components: {
    Side,
    Home
  },
  methods: {
    randomdFunFacts: function() {
      axios.get('./json/funfacts.json')
      .then(function(response){
        var obj = (response.data);
        var id = Math.floor((Math.random() * obj.length) + 1);
        var factsHTML = obj[id].fact;
        document.getElementById('funFacts').innerHTML = factsHTML;
        document.getElementById('funFactID').innerHTML = id;
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
