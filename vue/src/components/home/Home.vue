<template>
  <section id="home" class="page-section">
            
      <div id="coverArea" class="cover-area">
        <span v-html="coverHtml[1]"></span>
      </div><!--.cover-text-->
      
  </section><!--#home-->
</template>

<script>
import api from '../../api'
export default {
  data () {
    return {
      coverHtml: ['']
    }
  },
  methods: {
      loadCoverArea() {
        var _this = this;
        api.get('pages/7')
        .then(function(response){
          let page = (response.data);
          _this.coverHtml.push(page.content.rendered);
        })
      }
  },
  mounted() {
    this.loadCoverArea();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';
  @import './assets/scss/components/_page-home.scss';
  @import './assets/scss/components/_cover-area.scss';
</style>
