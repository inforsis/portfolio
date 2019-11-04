<template>
  <section id="works" class="page-section">
            
      <h1 class="title">
          My Portfolio
      </h1>

      <div class="content">

          <simplebar class="works" data-simplebar-auto-hide="false">
              
              <div id="worksContent">

                <div class="item" v-for="work in objWorks" v-bind:key="work">
                  <div class="container">
                    <figure class="thumb">
                        <img class="web" v-bind:key="thumb" :src="work[5].thumbnail[0]" alt="portfolio thumbnail">
                        <img class="mobile" v-bind:key="thumb" :src="work[5].thumbnail[1]" alt="portfolio thumbnail">
                        <img class="tablet" v-bind:key="thumb" :src="work[5].thumbnail[2]" alt="portfolio thumbnail">
                    </figure>
                    <div class="content">
                      <h3 class="title" v-html="work[1].title"></h3>
                      <small class="description" v-html="work[2].description"></small>
                      <ul class="listing">
                        <li class="item" v-for="tag in work[4].tags" v-bind:key="tag">{{tag}}</li>
                      </ul>
                      <a :href="work[3].link" target="_blank">{{work[3].link}}</a>
                    </div><!--.content-->
                  </div><!--.container-->
                </div><!--.item-->

              </div><!--#worksContent-->

          </simplebar><!--.works-->


      </div><!--.content-->

      <Statistics/>

  </section><!--#works-->
</template>

<script>
import api from '../../api';
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css'
import Statistics from '../statistics/Statistics'

export default {
  components: {
    simplebar,
    Statistics
  },
  data() {
    return {
       objWorks: []    
    }
  },
  methods: {
    loadPortfolio: function() {
      var _this = this;
      const URL= 'get-portfolio';
      api.get(URL)
      .then(function(response){
        var obj = (response.data);
        for (let i=0; i < obj.length; i++) {
          _this.objWorks.push(obj[i]);
          //alert (work)
        }
        //loadStatistics();
      })
    }
  },
  mounted() {
    this.loadPortfolio();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';
  @import './assets/scss/components/_works.scss';
</style>
