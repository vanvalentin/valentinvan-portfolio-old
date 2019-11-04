<style lang="scss">
@import '../assets/css/category-banner.scss';
</style>

<template>
<div class="row">
  <div class="offset-1 col-10 offset-md-2 col-md-4 offset-lg-1 col-lg-5 offset-xl-3 col-xl-3">
    <img ref="IlluImg" class="illu-img" :src="imgPath"/>
  </div>
  <div class="offset-1 col-10 offset-md-0 col-md-6 offset-lg-0 col-lg-5 offset-xl-0 col-xl-4">
    <h1 class="description-title">{{title}}</h1>
    <p class="description-text" v-html="text"></p>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SkillProject extends Vue {

  public static lastDelay: number = 1;
  @Prop()
  public imgPath!: string;

  @Prop()
  public title!: string;

  @Prop()
  public text!: string;

  constructor() {
    super();
  }

  public mounted() {
  }
}
</script>

