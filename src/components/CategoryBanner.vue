<style lang="scss">
@import '../assets/css/category-banner.scss';
</style>

<template>
<div class="banner-container">
  <img class="banner-img" :src="bannerImgPath"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryBanner extends Vue {
  @Prop()
  public bannerImgPath!: string;

  constructor() {
    super();
  }
}
</script>

