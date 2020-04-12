<template>
   <ul id="statistics" class="statistics">
      <li class="item" v-for="item in statistics" v-bind:key="item">
        <div class="content">
          <i class="icon material-icons" v-html="item.icon"></i>
          <span class="number">+<span id="workCount1" v-html="item.timer"></span></span>
          <small class="text" v-html="item.title"></small>
        </div>
      </li>
    </ul><!--.statistics-->
</template>

<script>
  import api from '../../api'

  //import { CountUp } from './assets/js/countUp.min.js';

  export default {
    data () {
      return {
        statistics: []
      }
    },
    methods: {
      loadStatistics: function() {
        var _this = this;
        const URL = 'statistics?per_page=99&filter[orderby]=date&order=desc';
        api.get(URL)
        .then(function(response){
          var obj = (response.data);
          for (var i = 0; i < obj.length; i++) {

            let title = obj[i].title.rendered;
            let timer = obj[i].content.rendered;
            let icon = obj[i].excerpt.rendered;
            
            _this.statistics.push({'title': title, 'timer':timer, 'icon':icon});
          }
        })
      },
      loadCountNumber: function() {
        /*let workCount = new CountUp('workCount1', 10);
        workCount.start();
        let projectsCount = new CountUp('projectsCount1', 100);
        projectsCount.start();
        let businessCount = new CountUp('businessCount1', 5);
        businessCount.start();
        let codeCount = new CountUp('codeCount1', 15);
        codeCount.start();
        let coffeeCount = new CountUp('coffeeCount1', 0);
        coffeeCount.start();*/
      }
    },
    mounted() {
      this.loadStatistics();
      //this.loadCountNumber();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_statistics.scss';
</style>
