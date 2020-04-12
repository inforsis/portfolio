<template>
  <label  id="funFactsCard" class="fun-facts-card animated" for="checkFunFacts" title="Click to close">
        
      <div class="content">

          <img src="./assets/img/Cube-1s-39px.svg" alt="">

          <h6 class="title">
              some fun fact about me #<span id="funFactID">{{this.funfactIDProp}}</span>
          </h6>
          
          <p id="funFacts" v-html=this.funfactProp></p> 

      </div><!--.content-->

  </label><!--.fun-facts-content-->  
</template>

<script>
  export default {
    props: {
      funfactProp: String,
      funfactIDProp: Number
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
