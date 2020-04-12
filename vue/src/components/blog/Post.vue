<template>
  <section id="blog" class="page-section">
            
      <h1 class="title">
          Recent articles
      </h1>

      <simplebar data-simplebar-auto-hide="false" class="content article-list">

          <div id="listingPosts">
              <div class="article" v-for="item in article" v-bind:key="item">
          
                  <h2 class="title">
                      <a :href="item.link" class="link">{{item.title}}</a>
                  </h2>

                  <time class="date" datetime="">{{item.data}}</time>
                      
              </div>
          </div><!--#listingPost-->
  
      </simplebar><!--.content-->

  </section><!--#blog--> 
</template>

<script>
  import api from '../../api'
  import simplebar from 'simplebar-vue';

  export default {
    name: 'Blog', 
    components: {
      simplebar
    },
    data () {
      return {
        article: []
      }
    },
    methods: {
      loadBlogPosts: function() {
        var _this = this;
        const URL = 'posts/';
        api.get(URL)
        .then(function(response){
          var obj = (response.data);
          for (var i = 0; i < obj.length; i++) {

            let link = obj[i].link;
            let title = obj[i].title.rendered;

            let date = obj[i].date.split('T')[0];
            
            _this.article.push({'title': title, 'link':link, 'data':date});
          }
        })
      }
    },
    mounted() {
      this.loadBlogPosts();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_article.scss';
</style>
