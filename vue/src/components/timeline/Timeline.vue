<template>
  <div class="content-side timeline">
     
      <dl id="timeLine" class="timeline-information">
        <dt class="year">
          <span v-html="this.year"></span>
        </dt>
        <dd class="item" v-for="events in event" v-bind:key="events" v-html="events"></dd>
      </dl>
      
      <div id="timeLinePagination" class="timeline-pagination"> 
        <label class="item" v-for="(item,index) in objEvents" v-bind:key="item">
          <input type="radio" v-if="(index === 0)" checked name="timeline" :value="index" autocomplete="off" v-on:change="changeTimeLine(index)">
          <input type="radio" v-else=""  name="timeline" :value="index" autocomplete="off" v-on:change="changeTimeLine(index)">
          <i class="bullet"></i>
          <span class="year" :data-year-yyyy="item.year" :data-year-yy="String(item.year).substring(2,4)"></span>
        </label>
      </div>

  </div><!--.timeline-->
</template>

<script>
import api from '../../api'
export default {
  data() {
    return {
         objEvents: [],
         event: [],
         year: Number
    }
  },
  methods: {
      loadTimeLine: function() {
        var _this = this; 
        const URL = 'timeline?per_page=99&filter[orderby]=date&order=desc';
        api.get(URL)
        .then(function(response){
          var obj = (response.data)
          //primeiro valor do objeto para o ano atual
          var currentYear = obj[0].date.split('-')
          currentYear = parseInt(currentYear[0])
          //inicia o objeto de eventos e o array de evento
          var events = {}
          var event = []
          for (var i in obj) {
            //pega o ano
            var year = obj[i].date.split('-');
            year = parseInt(year[0])
            //se o ano atual for igual ao ano do item
            if (year === currentYear) {
              //adiciona o item ao array de evento
              event.push(obj[i].title.rendered)
            }  
            if (year !== currentYear) {
              //atualiza o objeto de eventos
              events.year = currentYear
              events.events = event
              //adiciona o objeto de evento ao array principal
              _this.objEvents.push(events)
              //limpa os objetos e array
              events = {}
              event = []
              //starta os valores 
              events.year = year
              events.events = event.push(obj[i].title.rendered)
            }  
            //atribui o novo valor para o ano atual
            currentYear = year       
          }
          _this.event = _this.objEvents[0].events
          _this.year  = _this.objEvents[0].year
        })         
      },
      changeTimeLine: function(indexYear) {
         this.event = this.objEvents[indexYear].events
         this.year = this.objEvents[indexYear].year
      }
  },
  mounted() {
    this.loadTimeLine()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';
  @import './assets/scss/objects/_content-side.scss';
  @import './assets/scss/components/_timeline.scss';
</style>
