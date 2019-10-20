<style lang="scss">
@import '../assets/css/navbar.scss';
</style>

<template>
<nav class="navbar navbar-expand-lg navbar-background">
<router-link class="navbar-brand" to="/"><img src="../assets/header.png" ref="NavbarBannerImg" class="navbar-banner-img"/></router-link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <router-link class="nav-link" to="/web"><img src="../assets/web_navbar_link.png" class="navbar-link-img"/></router-link>
    </li>
    <li class="nav-item active">
        <router-link class="nav-link" to="/sql"><img src="../assets/sql_navbar_link.png" class="navbar-link-img"/></router-link>
    </li>
    <li class="nav-item active">
        <router-link class="nav-link" to="/coding"><img src="../assets/coding_navbar_link.png" class="navbar-link-img"/></router-link>
    </li>
    <li class="nav-item active">
        <router-link class="nav-link" to="/game"><img src="../assets/game_navbar_link.png" class="navbar-link-img"/></router-link>
    </li>
    <li class="nav-item active">
        <router-link class="nav-link" to="/graphic"><img src="../assets/graphic_navbar_link.png" class="navbar-link-img"/></router-link>
    </li>
    </ul>
</div>
</nav>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  constructor() {
    super();
  }

  public mounted() {
  }

  private goToHomePage() {
    this.$router.push("/");
  }

  private goToWebSkillPage() {
    this.$router.push("web");
  }

  private goToSqlSkillPage() {
    this.$router.push("sql");
  }
}
</script>