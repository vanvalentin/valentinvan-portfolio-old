<style lang="scss">
@import '../assets/css/main.scss';
</style>

<template>
<div>
  <div class="container-fluid" style="margin-bottom:30px">
    <Presentation
      ref="Presentation"/>
    <div id="skill-categories">
      <div class="row">
        <div class="offset-1 col-10 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-3 col-xl-3">
          <router-link to="/game">
            <CategoryBanner
              :bannerImgPath="getGameBannerUrl()"
            />
          </router-link>
        </div>
        <div class="offset-1 col-10 offset-md-0 col-md-5 offset-lg-0 col-lg-4 offset-xl-0 col-xl-3">
          <router-link to="/web">
            <CategoryBanner
              :bannerImgPath="getWebBannerUrl()"
            />
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-10 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-3 col-xl-3">
          <router-link to="/coding">
            <CategoryBanner
              :bannerImgPath="getCodingBannerUrl()"
            />
          </router-link>
        </div>
        <div class="offset-1 col-10 offset-md-0 col-md-5 offset-lg-0 col-lg-4 offset-xl-0 col-xl-3">
          <router-link to="/sql">
            <CategoryBanner
              :bannerImgPath="getSqlBannerUrl()"
            />
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-10 offset-md-3 col-md-6 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
          <div class="offset-xl-1 col-xl-10 margin-centered-col">
            <router-link to="/graphic">
              <CategoryBanner
                :bannerImgPath="getGraphicBannerUrl()"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Presentation from "@/components/Presentation.vue";
import CategoryBanner from "@/components/CategoryBanner.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Presentation,
    CategoryBanner,
    Footer
  },
})
export default class Home extends Vue {

  private turnOffAll() {
    if (this.$refs.Presentation) {
      // this.$refs.Presentation.turnOff();
    }
  }

  private getCodingBannerUrl(): string {
    return require("../assets/skill_category_coding.png");
  }

  private getGameBannerUrl(): string {
    return require("../assets/skill_category_game.png");
  }

  private getWebBannerUrl(): string {
    return require("../assets/skill_category_web.png");
  }

  private getSqlBannerUrl(): string {
    return require("../assets/skill_category_sql.png");
  }

  private getGraphicBannerUrl(): string {
    return require("../assets/skill_category_graphic.png");
  }
}
</script>
