<style lang="scss">
@import '../assets/css/main.scss';
</style>

<template>
  <div>
    <Presentation/>
    <div class="row">
      <div class="offset-1 col-10 offset-md-1 col-md-5 offset-lg-2 col-lg-4">
        <CategoryBanner
          :bannerImgPath="getCodingBannerUrl()"
        />
      </div>
      <div class="offset-1 col-10 offset-md-0 col-md-5 offset-lg-0 col-lg-4">
        <CategoryBanner
          :bannerImgPath="getGameBannerUrl()"
        />
      </div>
    </div>
    <div class="row">
      <div class="offset-1 col-10 offset-md-1 col-md-5 offset-lg-2 col-lg-4">
        <CategoryBanner
          :bannerImgPath="getWebBannerUrl()"
        />
      </div>
      <div class="offset-1 col-10 offset-md-0 col-md-5 offset-lg-0 col-lg-4">
        <CategoryBanner
          :bannerImgPath="getSqlBannerUrl()"
        />
      </div>
    </div>
    <div class="row">
      <div class="offset-1 col-10 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
        <CategoryBanner
          :bannerImgPath="getGraphicBannerUrl()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Presentation from '@/components/Presentation.vue';
import CategoryBanner from '@/components/CategoryBanner.vue';

@Component({
  components: {
    Presentation,
    CategoryBanner,
  },
})
export default class Home extends Vue {
  private getCodingBannerUrl(): string{
    return require("../assets/skill_category_coding.png");
  }
  
  private getGameBannerUrl(): string{
    return require("../assets/skill_category_game.png");
  }

  private getWebBannerUrl(): string{
    return require("../assets/skill_category_web.png");
  }
  
  private getSqlBannerUrl(): string{
    return require("../assets/skill_category_sql.png");
  }

  private getGraphicBannerUrl(): string{
    return require("../assets/skill_category_graphic.png");
  }
}
</script>
