<template>
  <section id="contact" class="page-section">
      
      <h1 class="title">
          Contact me
      </h1>

      <div class="content">

          <simplebar data-simplebar-auto-hide="false" class="main-content container-contact">
              
              <div id="contactBox" class="container-form">
                
                <dl class="contact-pointers" v-for="(item,index) in social" v-bind:key="item">
                  <dt class="title" v-if="index === 0" v-html="item.label"></dt>
                  <dd class="item"  v-if="index === 1" v-html="item.title"></dd>
                  <dd class="item" v-if="index > 1">
                    <a :href="item.link" target="_blank" :title="item.title" class="title">{{item.label}}</a>
                  </dd>
                </dl>

              </div><!--.container-form-->

          </simplebar><!--.contact-form-->
  
      </div><!--.content-->

  </section><!--#contact-->  
</template>

<script>
  import api from '../../api'
  import simplebar from 'simplebar-vue';

  export default {
    components: {
      simplebar
    },
    data () {
      return {
        social: []
      }
    },
    methods: {
      loadContacts: function() {
        document.getElementById('checkFunFacts').click()
        var _this = this;
        const URL = 'social?per_page=99&filter[orderby]=date&order=asc';
        api.get(URL)
        .then(function(response){
          var obj = (response.data);
          for (var i = 0; i < obj.length; i++) {

            let label = obj[i].title.rendered;
            let link = obj[i].excerpt.rendered;
            link = link.replace('<p>','');
            link = link.replace('</p>','');
            let title = obj[i].content.rendered;
            title = title.replace('<p>','');
            title = title.replace('</p>','');
            
            _this.social.push({'label': label, 'link':link, 'title':title});
          }
        })
        .finally(function(){
          document.getElementById('checkFunFacts').checked = false
        })
      }
    },
    mounted() {
      this.loadContacts();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_contact-pointers.scss';
  @import './assets/scss/components/_container-contact.scss';
</style>
