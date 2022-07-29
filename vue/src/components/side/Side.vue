<template>
  <aside class="side">
    <figure class="profile-pic">
      <span class="pic-rounded">
        <img
          src="./assets/img/jadson_moreira.webp"
          class="img"
          alt="foto perfil"
        />
      </span>
    </figure>
    <Menu />
    <span class="credits">
      Done with <i class="mdi mdi-glass-cocktail song" /> and
      <i class="mdi mdi-music-note-eighth song" />
    </span>
  </aside>
</template>

<script>
import Menu from "../menu/Menu";
export default {
  name: "Side",
  components: {
    Menu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/settings/settings";
@import "../../assets/scss/tools/tools";

@import "./assets/scss/objects/_side.scss";
@import "./assets/scss/components/_side.scss";
@import "./assets/scss/components/_profile-pic.scss";
@import "./assets/scss/components/_credits.scss";
</style>
