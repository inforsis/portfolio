<template>
  <body id="app">
    <input type="checkbox" autocomplete="off" onchange="" class="func-facts-check" id="checkFunFacts">
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
  @import './fonts/material-design-icons/material-icons.css'; 

  //IBMPLEXSANS
  @import './fonts/ibmplexsans/stylesheet.css'; 

  //Titillium Web
  @import './fonts/titilliumweb/stylesheet.css';
  
  @import './scss/main.scss';

  .main-container {	
    flex-grow: 1;
    overflow: hidden; 
  }

  //mobile
  @media (min-width: $screen-min-mobile) and (max-width: $screen-max-mobile) {
    .main-container {
      height: 100%;
    }
  }

  .page-section {
    display:flex;
    flex-direction: column;
    height: 100%;
      position: relative;
      background-color: $primary-light-color;
      padding: 50px;
      >.title {
        font-size: 2.3rem;
          line-height: 100%;
        color:$primary-color;
        font-family: $main-font-regular;
        margin-bottom: 30px;
      }
      >.content {
        display: flex; 
          height: 100%; 
          position: relative;
          //overflow-y: auto;	
      }
  }


  //mobile
  @media (min-width: $screen-min-mobile) and (max-width: $screen-max-mobile) {
      .page-section {
          padding: 1.5rem 1.5rem 5.0rem;
          >.title {
              font-size: 1.8rem;
              margin-bottom: 1rem;
          }
      }
  }


  .func-facts-check {
      display: none;
  }

</style>
