<template>
  <nav id="mainMenu" class="main-menu">
      <a class="main-menu-item" :href="item.slug" v-for="item in menu" v-bind:key="item" :data-title="item.title">
        <i class="material-icons">{{item.icon}}</i>
      </a>
  </nav>  
</template>

<script>
  import api from '../../api'
  export default {
    name: 'Menu',
    data() {
      return {
        menu: []
      }
    },
    methods: {
      loadMenu: function() {
        var _this = this;
        api.get('pages?filter[orderby]=date&order=asc')
        .then(function(response){
          let obj = (response.data);
          for (let i in obj) { 
                      
            let slug = '/#/'+obj[i].slug;
            let title = obj[i].slug;
            let icon;
            
            switch (obj[i].slug) {
              case 'home':
                icon = 'home';
                break;
              case 'about':
                icon = 'person';
                break;
              case 'works':
                icon = 'work';
                break;
              case 'articles':
                icon = 'public';
                break;
              case 'contact':
                icon = 'email';
                break;
            }
            _this.menu.push({'title': title, 'icon': icon, 'slug': slug});
          }
        })
      }
    },
    mounted() {
      this.loadMenu();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/settings/settings';
  @import '../../assets/scss/tools/tools';

  @import './assets/scss/components/_main-menu.scss';
  @import './assets/scss/objects/_main-menu.scss';
</style>
