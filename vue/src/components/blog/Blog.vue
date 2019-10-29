<template>
  <section id="blog" class="page-section">
            
      <h1 class="title">
          Recent articles
      </h1>

      <div data-simplebar data-simplebar-auto-hide="false" class="content article-list">

          <div id="listingPosts">
              <article class="article">
          
                  <h2 class="title">
                      <a href="#" class="link"></a>
                  </h2>

                  <time class="date" datetime=""></time>
                      
              </article>
          </div><!--#listingPost-->
  
      </div><!--.content-->

  </section><!--#blog--> 
</template>

<script>
  import api from '../../api'
  export default {
    name: 'Blog', 
    methods: {
      loadBlogPosts: function() {
        api.get('posts/')
        .then(function(response){
          var obj = (response.data);
          var post = document.getElementById('listingPosts');
          post.innerHTML = '';
          for (var i = 0; i < obj.length; i++) {
            var article = document.createElement('ARTICLE');
            article.classList.add('article');

            let title = document.createElement('H2');
            title.classList.add('title');

            let link = document.createElement('A');
            link.setAttribute('href',obj[i].link);
            link.classList.add('link');
            link.setAttribute('title',obj[i].title.rendered);
            link.innerHTML = obj[i].title.rendered;

            title.appendChild(link);

            article.appendChild(title);

            let date = document.createElement('TIME');
            date.innerHTML = obj[i].date.split('T')[0];
            date.classList.add('date');
            date.setAttribute('datetime','0000-00-00');

            article.appendChild(date);
          }
          post.appendChild(article);
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
