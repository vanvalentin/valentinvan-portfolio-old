<style lang="scss">
@import '../assets/css/category-banner.scss';
</style>

<template>
<div class="row">
  <div class="offset-md-2 col-md-4">
    <img ref="IlluImg" class="illu-img" :src="imgPath"/>
  </div>
  <div class="col-md-5">
    <h1 class="description-title">{{title}}</h1>
    <p class="description-text" v-html="text"></p>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SkillProject extends Vue {
  @Prop()
  public imgPath!: string;

  @Prop()
  public title!: string;

  @Prop()
  public text!: string;

  public static lastDelay: number = 1;

  constructor() {
    super();
  }

  mounted(){
  }
}

</script>

