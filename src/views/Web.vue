<style lang="scss">
@import '../assets/css/skill-page.scss';
</style>

<template>
<div>
  <Navbar 
    ref="Navbar"/>
  <div class="container-fluid">
    <div id="skill-title" class="row">
      <div class="offset-md-3 col-md-6">
        <img ref="" class="" src="../assets/web_title_skill_page.png"/>
      </div>
    </div>
    <div class="projects">
      <SkillProject 
        class="project"
        :imgPath="getPortfolioImg()"
        title="Portfolio"
        text="From design to coding, I made my own portfolio while I spent a year working in Hong Kong.  It is a mix of the famous Hong Kong street neons, with a bit of old school video game and asian traditional culture. 
        <br/><br/>
        <b>Made with:</b> HTML5, CSS3, VueJs, Typescript, Photoshop"
        />
      <SkillProject 
        class="project"
        :imgPath="getWebCompImg()"
        title="Web components"
        text="During one year I have worked as a Full Stack Developer at Société Générale Hong Kong, the centre of operations for Asia Pacific region of one of the main french banks. I was building web components used by finance team to automate and show analytics on various type of reports.
        <br/><br/>
        <b>Made with:</b> HTML5, CSS3, React, Typescript/Javascript, Bootstrap, Highcharts, Ag-Grid, .NET"
        />
      <SkillProject 
        class="project"
        :imgPath="getToecImg()"
        title="Les Dauphins du TOEC"
        text="During my bachelor I have done an internship as a Web Developper. This was my first working experience in web, I learnt to perfect my Javascript and discover the very first releases of Bootstrap. I built the swimming club &quot;Les Dauphins du TOEC&quot; website aswell as a special event website for them.é
        <br/><br/>
        <b>Made with:</b> HTML5, CSS3, Javascript, JQuery, Bootstrap, PHP, Photoshop"
        />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import SkillProject from "@/components/SkillProject.vue";

@Component({
  components: {
    Navbar,
    SkillProject,
  },
})
export default class Web extends Vue {

  private getPortfolioImg(): string {
    return require("../assets/img/web/illu_portfolio.png");
  }

  private getWebCompImg(): string {
    return require("../assets/img/web/illu_web_components.png");
  }

  private getToecImg(): string {
    return require("../assets/img/web/illu_toec.png");
  }
}
</script>
