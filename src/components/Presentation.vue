<style lang="scss">
@import '../assets/css/animations.scss';
@import '../assets/css/presentation.scss';
</style>

<template>
<div id="header" class="row">
  <div class="offset-md-3 col-md-6">
    <img class="" src="../assets/header.png"/>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Presentation extends Vue {
}
</script>
