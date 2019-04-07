<style lang="scss">
@import '../assets/css/main.scss';
</style>

<template>
  <div>
    <Presentation/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Presentation from '@/components/Presentation.vue';

@Component({
  components: {
    Presentation,
  },
})
export default class Home extends Vue {}
</script>
