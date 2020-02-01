<style lang="scss">
@import '../assets/css/footer.scss';
</style>

<template>
  <footer class="footer">
    <div class="container">
      <a href="mailto:valentin.van32@gmail.com" target="_blank"><img class="socials-img" alt="Linkedin" src="../assets/img/socials/gmail.png"/></a>
      <a href="https://www.linkedin.com/in/valentin-van-3a9337a8/" target="_blank"><img class="socials-img" alt="Linkedin" src="../assets/img/socials/linkedin.png" /></a>
      <a href="https://github.com/doublev32" target="_blank"><img class="socials-img" alt="Github" src="../assets/img/socials/github.png" /></a>
      <a href="https://instagram.com/valentin__van/" target="_blank"><img class="socials-img" alt="Instagram" src="../assets/img/socials/instagram.png" /></a>
      <a href="/assets/documents/Resume_Valentin_Van.pdf" download><img class="socials-img" alt="Resume" src="../assets/img/socials/resume_icon.png" /></a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {
  constructor() {
    super();
  }

  public mounted() {
  }

}
</script>