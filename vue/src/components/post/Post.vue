<template>
  <section id="post" class="page-section">
            
      <h1 class="title">
          {{this.post.title.rendered}}
      </h1>

      <time class="post-date" :datetime="this.date">
        {{this.date}}
      </time>

      <simplebar data-simplebar-auto-hide="false" class="content content-post">

          <div v-html="this.post.content.rendered"></div>
  
      </simplebar><!--.content-->

  </section><!--#blog--> 
</template>

<script>
  import api from '../../api'
  import simplebar from 'simplebar-vue';

  export default {
    name: 'Post', 
    components: {
      simplebar
    },
    data () {
      return {
        post: [],
        date: String
      }
    },
    methods: {
      getPost: function() {
        document.getElementById('checkFunFacts').click()
        let _this = this
        let slug = _this.$route.params.slug
        let URL = 'posts?slug='+slug
        api.get(URL)
        .then(function(response){
          let obj = response.data
          _this.post = obj[0]
          let date = new Date(obj[0].date_gmt)
          date = date.toUTCString()
          date = date.split(' GMT')[0]
          _this.date  = date.substring(0, date.length - 9)
        })
        .finally(function(){
          document.getElementById('checkFunFacts').checked = false
        })
      }
    },
    mounted() {
      this.getPost();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_post.scss';
</style>
