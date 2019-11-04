<template>
  <div class="content-side timeline">
      
      <dl id="timeLine" class="timeline-information">
        <dt class="year">
          <span v-html="objEvents[0].year"></span>
        </dt>
        <dd class="item" v-for="events in objEvents[0].events" v-bind:key="events" v-html="events"></dd>
      </dl><!--.timeline-information-->
      
      <div id="timeLinePagination" class="timeline-pagination">
        <label class="item" v-for="(year,index) in objYears" v-bind:key="year">
          <input type="radio" v-if="index === 0" checked="checked" name="timeline" :value="year" autocomplete="off" v-on:change="changeTimeLine(year)">
          <input type="radio" v-else name="timeline" :value="year" autocomplete="off" v-on:change="changeTimeLine(year)">
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
      objYears: [],
      objEvents: []      
    }
  },
  methods: {
      loadTimeLine: function() {
       var _this = this; 
       const URL = 'timeline?per_page=99&filter[orderby]=date&order=desc';
       api.get(URL)
      .then(function(response){
        var obj = (response.data);
        var years = new Array();
        var events = new Array(); 
        for (var i=0;i<obj.length;i++) {
          let year = obj[i].date.split('-');  
          let lastYear = obj[0].date.split('-'); 
          years.push(year[0]);
          if (parseInt(year[0]) === parseInt(lastYear[0])) {
            events.push(obj[i].title.rendered);            
          }
        }
        years = years.filter((v,i,a) => a.indexOf(v) === i);
        for (i in years) {
          let year = years[i];
          _this.objYears.push(year);
          
        }
        _this.objEvents = [];
        _this.objEvents.push({'year':2012,events});
      });
    },
    changeTimeLine: function(selectYear) {
      var _this = this;
      const URL = 'timeline?per_page=99&filter[orderby]=date&order=desc';
      api.get(URL)
      .then(function(response){
        var obj = (response.data);  
        var events = new Array();     
        for (let i in obj) {
          let year = obj[i].date.split('-');
          if (parseInt(year) === parseInt(selectYear)) {
            events.push(obj[i].title.rendered);            
          }
        }
        _this.objEvents = [];
        _this.objEvents.push({'year':selectYear,events});
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
  @import './assets/scss/objects/_content-side.scss';
</style>
