<template>
  <div class="content-side timeline">
      
      <dl id="timeLine" class="timeline-information"></dl><!--.timeline-information-->
      
      <div id="timeLinePagination" class="timeline-pagination"></div><!--.timeline-pagination-->

  </div><!--.timeline-->
</template>

<script>
import axios from 'axios'
export default {
  methods: {
      loadTimeLine: function() {
       axios.get('http://localhost/jadson.dev/portfolio/wordpress/wp-json/wp/v2/timeline?per_page=99&filter[orderby]=date&order=desc')
      .then(function(response){
        var obj = (response.data);
        var timeLinePagination = document.getElementById('timeLinePagination');
        timeLinePagination.innerHTML = '';
        var years = new Array();
        for (var i=0;i<obj.length;i++) {
          let year = obj[i].date.split('-');     
          years.push(year[0]);
        }
        years = years.filter((v,i,a) => a.indexOf(v) === i);
        for (i in years) {
          let year = years[i];
          
          let label = document.createElement('LABEL');
          label.classList.add('item');
          
          let input = document.createElement('INPUT');
          input.setAttribute('type','radio');
          input.setAttribute('name','timeline');
          input.setAttribute('value',year);
          input.setAttribute('v-on:change','changeTimeLine()');
          
          label.appendChild(input);

          let bullet = document.createElement('I');
          bullet.classList.add('bullet');
          label.appendChild(bullet);

          let yearTxt = document.createElement('SPAN');
          yearTxt.innerHTML = year;
          label.appendChild(yearTxt);

          timeLinePagination.appendChild(label);

          if (i == 0)
              input.click();
              
        }
      });
    },
    changeTimeLine: function() {
      axios.get('http://localhost/jadson.dev/portfolio/wordpress/wp-json/wp/v2/timeline/35')
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
