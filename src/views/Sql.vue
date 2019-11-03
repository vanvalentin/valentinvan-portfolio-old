<style lang="scss">
@import '../assets/css/skill-page.scss';
</style>

<template>
<div>
  <Navbar 
    ref="Navbar"/>
  <div class="container-fluid">
    <div id="skill-title" class="row">
      <div class="offset-md-3 col-md-6">
        <img ref="" class="" src="../assets/sql_title_skill_page.png"/>
      </div>
    </div>
    <div class="projects">
      <SkillProject 
        class="project"
        :imgPath="getSqlImg()"
        title="My experience with SQL"
        text="During my 5 years studying computer science, I had many experiences using SQL technologies. I have started by learning the basics of relational database, building many and many of those relational models... And then finally got my hands dirty first at school and then during a web development internship where I worked with MySQL. To finally switch over to PostgreSQL on multiple project for work as well as peronnal.<br/>
Query languages are not the most evolving technology as of now. But with other web tools advensing at an insane rate I have started getting interested in NoSQL database. I have followed a basic course during my exchange studies and I am still lurking around this technology, waiting for the right time to try it...
        <br/><br/>
        <b>Worked with:</b> PostgreSQL, MySQL"
        />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import SkillProject from "@/components/SkillProject.vue";

@Component({
  components: {
    Navbar,
    SkillProject,
  },
})
export default class Sql extends Vue {

  private getSqlImg(): string {
    return require("../assets/img/web/illu_portfolio.png");
  }
}
</script>
