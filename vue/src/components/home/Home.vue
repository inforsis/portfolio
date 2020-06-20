<template>
  <section id="home" class="page-section">
            
      <div id="coverArea" class="cover-area">
        <span v-html="coverHtml[0]"></span>
      </div><!--.cover-text-->
      
  </section><!--#home-->
</template>

<script>
import local from '../../local'
export default {
  data () {
    return {
      coverHtml: []
    }
  },
  methods: {
      loadCoverArea() {
        var _this = this;
        const URL = 'home.json';
        local.get(URL)
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
