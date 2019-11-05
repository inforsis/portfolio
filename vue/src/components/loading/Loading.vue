<template>
  <label  id="funFactsCard" class="fun-facts-card animated" for="checkFunFacts" title="Click to close">
        
      <div class="content">

          <img src="./assets/img/Cube-1s-39px.svg" alt="">

          <h6 class="title">
              some fun fact about me #<span id="funFactID" v-html="funfact[0]"></span>
          </h6>
          
          <p id="funFacts" v-html="funfact[1]"></p> 

      </div><!--.content-->

  </label><!--.fun-facts-content-->  
</template>

<script>
import api from '../../api'
export default {
  data() {
    return {
      funfact: []     
    }
  },
  methods: {
    randomFunFacs: function(){
      var _this = this;
      api.get('funfacts')
      .then(function(response){
        var obj = (response.data);
        let min = 0;
        let max = obj.length;
        let i = Math.floor(Math.random() * (max - min)) + min; 
        _this.funfact.push(i);
        _this.funfact.push(obj[i].title.rendered);
      })
    }
      
  },
  mounted() {
    this.randomFunFacs();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_fun-facts-card.scss';
  @import './assets/scss/components/_fun-facts-icon.scss';
</style>
