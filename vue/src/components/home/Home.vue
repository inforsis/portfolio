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
        })
      }
  },
  mounted() {
    this.loadCoverArea();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../scss/settings/settings';
  @import '../../scss/tools/tools';
  #home {
      justify-content: center;
      align-items: center;
      padding: 0;
      background-color: $primary-dark-color;
    &:before {
      background-image: url('./img/jadson-moreira_home.jpg');
      content: '';
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: absolute;
      opacity: .4;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      will-change: transform;
    }
  }
  .cover-area {
    font-family: $main-font-bold;
    font-size: 2.3rem;
    line-height: 2.3rem;
    padding: 0 1.5rem;
    z-index: 1;
    color:$primary-color;
    letter-spacing: 0.3rem; //5px;
    text-shadow: 0px 0px 3px rgba(17,48,48,0.8);
    small {
      font-size: 0.48rem; // 0.72rem;
      line-height: 1.2rem;
      font-family: $primary-font-light;
      color:#fff;
      margin-top: 0.5rem;
      text-shadow: 1px 1px 1px rgba(17,44,48,0.8);
      letter-spacing: 3px;
      text-transform: uppercase;
      text-align: center;
      display: block;
      font-weight: bold;
    }
  }
</style>
