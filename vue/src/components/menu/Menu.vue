<template>
  <nav id="mainMenu" class="main-menu"></nav>  
</template>

<script>
  import api from '../../api'
  export default {
    name: 'Menu',
    methods: {
      loadMenu: function() {
        api.get('pages?filter[orderby]=date&order=asc')
        .then(function(response){
          let obj = (response.data);
          var menu = document.getElementById('mainMenu');
          menu.innerHTML = "";
          for (let i in obj) {
            let item = document.createElement('A');
            
            item.classList.add('main-menu-item');
            item.setAttribute('href','#/'+obj[i].slug);      
            item.setAttribute('id','nav-'+obj[i].slug);            
            item.setAttribute('data-title',obj[i].slug); 
            
            let icon = document.createElement('I');
            icon.classList.add('material-icons');
            switch (obj[i].slug) {
              case 'home':
                icon.innerHTML = 'home';
                break;
              case 'about':
                icon.innerHTML = 'person';
                break;
              case 'works':
                icon.innerHTML = 'work';
                break;
              case 'articles':
                icon.innerHTML = 'public';
                break;
              case 'contact':
                icon.innerHTML = 'email';
                break;
            }

            item.appendChild(icon);

            menu.appendChild(item);
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
