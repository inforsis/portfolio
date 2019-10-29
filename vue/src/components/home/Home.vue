<template>
  <section id="home" class="page-section">
            
      <div id="coverArea" class="cover-area"></div><!--.cover-text-->
      
  </section><!--#home-->
</template>

<script>
import api from '../../api'
export default {
  methods: {
      loadCoverArea: function() {
        api.get('pages/7')
        .then(function(response){
          let page = (response.data);
          let cover = document.getElementById('coverArea');
          cover.innerHTML = page.content.rendered;
        })
      }
  },
  data () {
    return {
      loading: true,
      errored: false
    }
  },
  async mounted () {
    try {
      this.loadCoverArea();
    }
    finally {
      this.loading = false
    }
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
