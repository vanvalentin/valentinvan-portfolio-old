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
      <div class="row">
        <div class="offset-0 col-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10" style="margin-bottom:25px">
          <img ref="IlluImg" class="illu-img" :src="this.getGraphicsImg()"/>
        </div>
        <div class="offset-1 col-10 offset-md-1 col-md-10 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6" style="margin-bottom:50px">
          <h1 class="description-title">A little story...</h1>
          <div class="description-text">
            <div class="indented-p">Even though my studies revolve mostly around computer programming, I always had an interest in graphic design. Since my years in highschool I loved messing around photos, drawings in different graphics editor. I would build birthday cards, make some graphics for my guild in some online games, live streaming myself drawing on my tablet to 4 people...</div><br/>
            <div class="indented-p">I decided to leave my 4 viewers (I know, big move right?) to shift my focus on coding which, well, is my field of work now... But in every job and project I have worked in, I would always add my touch with some graphic design of my own. This is something I hold dearly in anything I make, I will always try to think about user interfaces and experience. Therefore, I am still trying to find some time to experience more new things related to graphics. I have taken a liking in photography at the moment, and would also like to experience more of 3D modeling and VFX.</div>
            <br/>
            <b>Worked with:</b> Photoshop, Lightroom, Premiere, 3DSMax
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import SkillProject from "@/components/SkillProject.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Navbar,
    SkillProject,
    Footer
  },
})
export default class Graphic extends Vue {

  private getGraphicsImg(): string {
    return require("../assets/img/graphic/illu_photo.png");
  }
}
</script>
