<template>
        <section id="about" class="page-section">
            
            <h1 class="title" id="aboutTitle" v-html="about[0]"></h1>

            <div class="content">
                
                <simplebar class="about-resume" data-simplebar-auto-hide="false">
                    <div id="aboutResume" v-html="about[1]"></div><!--#aboutResume-->
                </simplebar><!--.about-resume-->

                <Timeline/>

            </div><!--.content-->

        </section><!--#about-->
</template>

<script>
import api from '../../api'
import Timeline from '../timeline/Timeline'

import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  name: 'About',
  components: {
    Timeline,
    simplebar
  },
  data () {
    return {
      about: []
    }
  },
  methods: {
      aboutResume: function() {
        document.getElementById('checkFunFacts').click()
        var _this = this;
        const URL = 'pages/9';
        api.get(URL)
        .then(function(response){
          let about = (response.data);
          _this.about.push(about.title.rendered);
          _this.about.push(about.content.rendered);
        })
        .finally(function(){
          document.getElementById('checkFunFacts').checked = false
        })
      }
  },
  async mounted () {
    try {
      this.aboutResume();
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
  @import './assets/scss/components/_about-resume.scss';
</style>
