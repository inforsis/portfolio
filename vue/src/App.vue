<template>
  <body id="app">
    <NprogressContainer/>
    <input type="checkbox" autocomplete="off"  class="func-facts-check" id="checkFunFacts">
    <Side/>
    <main class="main-container animated">
      <router-view></router-view>
      <label class="fun-facts-icon" for="checkFunFacts" @click="getFunFacts()" data-title="Fun Fact about me" ></label>
    </main><!--.main-container-->
    <Funfacts :funfactProp="this.funfact" :funfactIDProp="this.funfactID" />
  </body>
</template>

<script>
import api from './api' 
import Side from './components/side/Side.vue'
import Funfacts from './components/funfacts/Funfacts.vue'

import 'simplebar/dist/simplebar.min.css';

import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  name: 'app',
  components: {
    Side,
    Funfacts,
    NprogressContainer
  },
  data () {
      return {
        funfactObj: [],
        funfact: String,
        funfactID: Number
      }
    },
    methods: {
      loadFact: function() {
        let _this = this
        const URL = 'funfacts?per_page=99'
        api.get(URL)
        .then(function(response){
          let obj = response.data
          for (let i in obj) {
            _this.funfactObj.push(obj[i].title.rendered)
          }
          _this.getFunFacts()
        })
      },
      getFunFacts: function() {
        let _this = this
        let len = _this.funfactObj.length
        let i = Math.floor(Math.random() * len)
        _this.funfactID = i + 1
        _this.funfact = _this.funfactObj[i]
      }
    },
    mounted() {
      this.loadFact()
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
