<template>
        <section id="about" class="page-section">
            
            <h1 class="title" id="aboutTitle" v-html="about[0]"></h1>

            <div class="content">
                
                <div data-simplebar data-simplebar-auto-hide="false" class="about-resume">
                    <div id="aboutResume" v-html="about[1]"></div><!--#aboutResume-->
                </div><!--.about-resume-->

                <Timeline/>

            </div><!--.content-->

        </section><!--#about-->
</template>

<script>
import api from '../../api'
import Timeline from '../timeline/Timeline'
export default {
  name: 'About',
  components: {
    Timeline
  },
  data () {
    return {
      about: []
    }
  },
  methods: {
      aboutResume: function() {
        var _this = this;
        api.get('pages/9')
        .then(function(response){
          let about = (response.data);
          _this.about.push(about.title.rendered);
          _this.about.push(about.content.rendered);
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
