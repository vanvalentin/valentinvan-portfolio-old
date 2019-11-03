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
        text="During my apprenticeship of 3 years at Nexter Training, I have helped built virtual and augmented reality training for various fields. I first started my experience helping build and maintain their scenario tool. The tool was an add-on to the game engine Unity3D. It will help people with no coding skills build various type of scenario for their trainings and link them to 3D elements in Unity.<br/>
With the release of the VR headset HTC Vive during my first year I helped build their first VR training with the headset. We would then continue on to build many other training modules, using wireless headsets, vocal recognition and even VR gloves... It was obviously an experience where I learned a great amount of new skill. But it also helped me to know what computing technologies I was intersted in, and that would be video game development. 
        <br/><br/>
        <b>Made with:</b> Unity3D, C#, HTC Vive, Microsoft Hololens"
        />
      <SkillProject 
        class="project"
        :imgPath="getValleyResistanceImg()"
        title="Valley Resistance"
        text="On my final engineer degree project, we decided to build a Virtual Reality game. This was a proof of concept of a game mixing real time strategy to tower defence. The player is looking down a board and can place building and create units. The game would then launch waves of ennemy to invade the &quot;valley&quot; and by killing waves the player could earn more money and therefore more power.
        <br/><br/>
        <b>Made with:</b> Unity, Maya, Oculus Rift"
        />
      <SkillProject 
        class="project"
        :imgPath="getKinectImg()"
        title="Kinect mini-game"
        text="My first ever project related to video games! It was a simple game using Microsoft's Kinect. The goal was to &quot;slash&quot; with your hand the stressed syllable in english words.
        <br/><br/>
        <b>Made with:</b> Java, Processing, Kinect"
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
export default class Game extends Vue {

  private getVrArTrainingImg(): string {
    return require("../assets/img/web/illu_portfolio.png");
  }

  private getValleyResistanceImg(): string {
    return require("../assets/img/web/illu_portfolio.png");
  }

  private getKinectImg(): string {
    return require("../assets/img/web/illu_portfolio.png");
  }
}
</script>
