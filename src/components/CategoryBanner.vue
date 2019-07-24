<style lang="scss">
@import '../assets/css/animations.scss';
@import '../assets/css/category-banner.scss';
</style>

<template>
<div class="banner-container">
  <img ref="BannerImg" class="banner-img" :src="bannerImgPath"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryBanner extends Vue {
  @Prop()
  public bannerImgPath!: string;

  public static lastDelay: number = 0.5;

  constructor() {
    super();
  }

  mounted(){
    CategoryBanner.lastDelay = genRand(CategoryBanner.lastDelay, CategoryBanner.lastDelay+1, 2);
    (this.$refs.BannerImg as HTMLImageElement).style.animationDelay = CategoryBanner.lastDelay + "s";

    console.log("before")
    setTimeout( () => {  this.removeAnimDelay(); console.log("after");}, CategoryBanner.lastDelay*1000+1000 );
  
  }

  removeAnimDelay(){
    (this.$refs.BannerImg as HTMLImageElement).style.removeProperty("animation-delay");
  }
}

function genRand(min: number, max: number, decimalPlaces: number) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}
</script>

