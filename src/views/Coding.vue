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
        <img ref="" class="" src="../assets/coding_title_skill_page.png"/>
      </div>
    </div>
    <div class="projects">
      <SkillProject 
        class="project"
        :imgPath="getRestApiImg()"
        title="REST API"
        text="<div class=&quot;indented-p&quot;>During one year I have worked as a Full Stack Developer at Société Générale Hong Kong, the centre of operations for Asia Pacific region of one of the main french banks. Aside from building front-end web components used by finance team, I was also building API retrieving data and automating different type of calculation.</div>
        <br/>
        <b>Made with:</b> .NET Core"
        />
      <SkillProject 
        class="project"
        :imgPath="getFaceswapImg()"
        title="Faceswap"
        text="<div class=&quot;indented-p&quot;>A project of a couple of months during my exchange study in Czech Replublic. I was commitionned to create a piece of software that would morph two faces into one. It was a pretty challenging and intersting project where I learned about Python, machine learning and visual computing.</div>
        <br/>
        <b>Made with:</b> Python"
        />
      <SkillProject 
        class="project"
        :imgPath="getBluetoothRemoteImg()"
        title="Bluetooth remote App"
        text="<div class=&quot;indented-p&quot;>As an apprentice in Nexter Training, a virtual reality training provider, I create an Android App. This app purpose is to allow a presenter of a Virtual Reality presentation to control the environement and timing of the presentation that is shown to a potential client. The app communicates through bluetooth to the VR module ran on a computer and created through Unity.</div>
        <br/>
        <b>Made with:</b> Java, Android Studio, Unity3D"
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
    Footer
  },
})
export default class Coding extends Vue {

  private getRestApiImg(): string {
    return require("../assets/img/coding/illu_sg_rest.png");
  }

  private getFaceswapImg(): string {
    return require("../assets/img/coding/illu_faceswap.png");
  }

  private getBluetoothRemoteImg(): string {
    return require("../assets/img/coding/illu_bluetooth_remote.png");
  }
}
</script>
