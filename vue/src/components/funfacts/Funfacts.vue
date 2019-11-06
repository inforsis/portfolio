<template>
  <label  id="funFactsCard" class="fun-facts-card animated" for="checkFunFacts" title="Click to close">
        
      <div class="content">

          <img src="./assets/img/Cube-1s-39px.svg" alt="">

          <h6 class="title">
              some fun fact about me #<span id="funFactID"></span>
          </h6>
          
          <p id="funFacts"></p> 

      </div><!--.content-->

  </label><!--.fun-facts-content-->  
</template>

<script>
//import api from '../../api'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_fun-facts-card.scss';
  @import './assets/scss/components/_fun-facts-icon.scss';
</style>
