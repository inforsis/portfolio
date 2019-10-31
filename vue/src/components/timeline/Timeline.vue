<template>
  <div class="content-side timeline">
      
      <dl id="timeLine" class="timeline-information">
        <dt class="year">
          2012
        </dt>
        <dd class="item">
          Start at CENPES/Petrobras on UX Team like Front End developer.
        </dd>
      </dl><!--.timeline-information-->
      
      <div id="timeLinePagination" class="timeline-pagination">
        <label class="item" v-for="year in years" v-bind:key="year">
          <input type="radio" name="timeline" :value="year" onchange="changeTimeLine(this,2012)">
          <i class="bullet"></i>
          <span>{{year}}</span>
        </label>
      </div><!--.timeline-pagination-->

  </div><!--.timeline-->
</template>

<script>
import api from '../../api'
export default {
  data() {
    return {
      years: []
    }
  },
  methods: {
      loadTimeLine: function() {
       var _this = this; 
       api.get('timeline?per_page=99&filter[orderby]=date&order=desc')
      .then(function(response){
        var obj = (response.data);
        var years = new Array();
        for (var i=0;i<obj.length;i++) {
          let year = obj[i].date.split('-');     
          years.push(year[0]);
        }
        years = years.filter((v,i,a) => a.indexOf(v) === i);
        for (i in years) {
          let year = years[i];
          _this.years.push(year);
        }
      });
    },
    changeTimeLine: function() {
      api.get('timeline/35')
      .then(function(response){
        var obj = (response.data);
        var timeline = document.getElementById('timeLine');
        timeline.innerHTML = '';
          alert ('jadson')
        for (let i=0;i<obj.length;i++) {
          //alert ('a')
        } 
      }); 
    }
  },
  mounted() {
    this.loadTimeLine();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';
  @import './assets/scss/components/_timeline.scss';
</style>
