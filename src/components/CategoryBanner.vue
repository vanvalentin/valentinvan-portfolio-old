<style lang="scss">
@import '../assets/css/animations.scss';
@import '../assets/css/category-banner.scss';
</style>

<template>
<div class="banner-container">
  <img ref="BannerImg" class="banner-img" :src="bannerImgPath" v-on:click="onCategoryClick()"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CategoryBanner extends Vue {

  public static lastDelay: number = 1;
  @Prop()
  public bannerImgPath!: string;

  constructor() {
    super();
  }

  public mounted() {
    CategoryBanner.lastDelay = genRand(CategoryBanner.lastDelay, CategoryBanner.lastDelay + 1, 2);
    (this.$refs.BannerImg as HTMLImageElement).style.animationDelay = CategoryBanner.lastDelay + "s";

    setTimeout( () => {  this.removeAnimDelay(); }, CategoryBanner.lastDelay * 1000 + 1000 );
  }

  public onCategoryClick() {
    this.$emit("onClick");
  }

  private removeAnimDelay() {
    (this.$refs.BannerImg as HTMLImageElement).style.removeProperty("animation-delay");
  }

}

function genRand(min: number, max: number, decimalPlaces: number) {
    let rand = Math.random() * (max - min) + min;
    let power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}
</script>

