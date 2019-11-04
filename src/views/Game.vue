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
        <img ref="" class="" src="../assets/game_title_skill_page.png"/>
      </div>
    </div>
    <div class="projects">
      <SkillProject 
        class="project"
        :imgPath="getVrArTrainingImg()"
        title="VR/AR Training"
        text="<div class=&quot;indented-p&quot;>During my apprenticeship of 3 years at Nexter Training, I have helped built virtual and augmented reality training for various fields. I first started my experience helping build and maintain their scenario tool. The tool was an add-on to the game engine Unity3D. It will help people with no coding skills build various type of scenario for their trainings and link them to 3D elements in Unity.</div><br/>
<div class=&quot;indented-p&quot;>With the release of the VR headset HTC Vive during my first year I helped build their first VR training with the headset. We would then continue on to build many other training modules, using wireless headsets, vocal recognition and even VR gloves... It was obviously an experience where I learned a great amount of new skill. But it also helped me to know what computing technologies I was intersted in, and that would be video game development.</div> 
        <br/>
        <b>Made with:</b> Unity3D, C#, HTC Vive, Microsoft Hololens"
        />
      <SkillProject 
        class="project"
        :imgPath="getGuardianOfTheWallImg()"
        title="Guardian of the wall"
        text="<div class=&quot;indented-p&quot;>On my final engineer degree project, we decided to build a Virtual Reality game. This was a proof of concept of a game mixing real time strategy to tower defence. The player is looking down a board and can place building and create units. The game would then launch waves of ennemies to invade the castle and by killing waves the player could earn more money and therefore more power.</div>
        <br/>
        <b>Made with:</b> Unity, Maya, Oculus Rift"
        />
      <SkillProject 
        class="project"
        :imgPath="getKinectImg()"
        title="Kinect mini-game"
        text="<div class=&quot;indented-p&quot;>My first ever project related to video games! It was a simple game using Microsoft's Kinect. The goal was to &quot;slash&quot; with your hand the stressed syllable in english words.</div>
        <br/>
        <b>Made with:</b> Java, Processing, Kinect"
        />
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
    Footer,
  },
})
export default class Game extends Vue {

  private getVrArTrainingImg(): string {
    return require("../assets/img/game/illu_vr_ar.png");
  }

  private getGuardianOfTheWallImg(): string {
    return require("../assets/img/game/illu_guardian_of_the_wall.png");
  }

  private getKinectImg(): string {
    return require("../assets/img/game/illu_kinect.png");
  }
}
</script>
