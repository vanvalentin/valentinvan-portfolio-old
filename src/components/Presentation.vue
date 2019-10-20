<style lang="scss">
@import '../assets/css/animations.scss';
@import '../assets/css/presentation.scss';
</style>

<template>
<div id="header" class="row">
  <div class="offset-md-3 col-md-6">
    <img ref="" class="" src="../assets/header.png"/>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Presentation extends Vue {
  private PresentationImg?: HTMLImageElement;

  public turnOff() {
    if(this.PresentationImg){
      this.PresentationImg.classList.add('turn-off-presentation');
    }
  }
}
</script>
