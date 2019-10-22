<template>
  <main class="main-container animated">

        <section id="home" class="page-section">
            
            <div id="coverArea" class="cover-area">
              {{titulo}}
            </div><!--.cover-text-->
            
        </section><!--#home-->

  </main>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
      loadCoverArea: function() {
        axios.get('http://localhost/jadson.dev/portfolio/wordpress/wp-json/wp/v2/pages/7')
        .then(function(response){
          let page = (response.data);
          let cover = document.getElementById('coverArea');
          cover.innerHTML = page.content.rendered;
          //cover.innerHTML = Object.keys(page);
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
