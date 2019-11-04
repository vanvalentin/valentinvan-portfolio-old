<style lang="scss">
@import '../assets/css/navbar.scss';
</style>

<template>
<nav class="navbar navbar-expand-lg navbar-background">
<router-link class="navbar-brand" to="/"><img src="../assets/header.png" ref="NavbarBannerImg" class="navbar-banner-img"/></router-link>
<button v-on:click="onCollapseMenuClick()" class="navbar-toggler collapsed" style="padding: 0 0 0 0;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src="../assets/burger_menu.png" style="height:45px;"/>
</button>

<div ref="Menu" class="collapse navbar-collapse collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/game"><img src="../assets/game_navbar_link.png" class="navbar-link-img"/></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/web"><img src="../assets/web_navbar_link.png" class="navbar-link-img"/></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/coding"><img src="../assets/coding_navbar_link.png" class="navbar-link-img"/></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/sql"><img src="../assets/sql_navbar_link.png" class="navbar-link-img"/></router-link>
      </li>
      <li class="nav-item">
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

  private onCollapseMenuClick(){
    const menuElmt = (this.$refs.Menu as HTMLDivElement);
    const isShowing = menuElmt.classList.contains("show");

    if(isShowing){
      menuElmt.classList.remove("show");
    }else{
      menuElmt.classList.add("show");
    }

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