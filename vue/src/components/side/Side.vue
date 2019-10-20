<template>
  <aside class="side">
      <figure class="profile-pic">
          <span class="pic-rounded">
              <img src="./img/jadson_moreira.jpg" class="img" alt="foto perfil">                
          </span>
      </figure>
      <nav id="mainMenu" class="main-menu"></nav>
      <span class="credits">
          Done with <i class="material-icons heart">favorite</i> and <i class="material-icons song">audiotrack</i>
      </span>
  </aside>  
</template>

<script>
  export default {
  name: 'Side'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../scss/settings/settings';
  @import '../../scss/tools/tools';

  .side {
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    flex-grow: 0;
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index:9999;
  }
  .profile-pic {
    width:60px;
    height: 60px;
    display: block;
    position: absolute;
    top:0;
    right: 0;
  }
  .pic-rounded {
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;	
    > .img {
      width: 100%;
      height: auto;
      display: block; 
    }
  }

  .credits {
    font-size: 9px;
    font-family: $primary-font-regular;
    position: absolute;
    bottom: 5px;
    padding: 5px;
    text-align: center;
    opacity: 0.4;
    transition: all 1s ease;
    >.material-icons {
      font-size: 10px;
      color:$secundary-link-color;
    }
    &:hover {
      opacity: 1;
      transform: scale(1.1);
      >.heart,
      >.song {
        animation-duration: 3s;
        animation-delay: 2s;
        animation-iteration-count: infinite;
      }
      >.heart {
        -webkit-animation-name: heartBeat;
        animation-name: heartBeat;
        -webkit-animation-duration: 1.3s;
        animation-duration: 1.3s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        @keyframes heartBeat {
          0% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          
          14% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
          }
          
          28% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          
          42% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
          }
          
          70% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          }
      }
      >.song {
        -webkit-animation-name: tada;
          animation-name: tada;
          @keyframes tada {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
          
          10%,
          20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          }
          
          30%,
          50%,
          70%,
          90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }
          
          40%,
          60%,
          80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
          }
          
          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
          }
      }
    }
  }
</style>
