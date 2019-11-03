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
        <img ref="" class="" src="../assets/graphic_title_skill_page.png"/>
      </div>
    </div>
    <div class="projects">
      <SkillProject 
        class="project"
        :imgPath="getGraphicsImg()"
        title="A little story..."
        text="Even though my studies revolve mostly around computer programming, I always had an interest in graphic design. Since my years in highschool I loved messing around photos, drawings in different graphics editor. I would build birthday cards, make some graphics for my guild in some online games, live streaming myself drawing on my tablet to 4 people...<br/><br/>
I have now left my 4 viewers and focused on coding due to my field of study. But in every job and project I have worked in, I would always add my touch with some graphic design of my own. This is something I hold dearly in anything I make, I will always try to think about user interfaces and experience. Therefore, I am still trying to find some time to experience more new things related to graphics. I have taken a liking in photography at the moment, and would also like to experience more of 3D modeling and VFX.
        <br/><br/>
        <b>Worked with:</b> Photoshop, Lightroom, Premiere, 3DSMax"
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
export default class Graphic extends Vue {

  private getGraphicsImg(): string {
    return require("../assets/img/web/illu_portfolio.png");
  }
}
</script>
