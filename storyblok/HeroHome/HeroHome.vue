<template>
  <div class="component componentSpacing ">
    <div v-editable="blok" class="container centerMaxWidthContainer">
      <div class="content">
        <h1 class="Hero Hero-Headline">{{ blok.Headline }} <span class="text-outlined">{{ blok.HeroHeadlineAdditional }}</span></h1>
      <p class="Hero Hero-JobText">{{ blok.PreProfessionText }} <span class="text-outlined">{{blok.HeroProfessionPrimary}}</span> & <span class="text-outlined">{{ blok.HeroProfessionSecondary}}</span> {{ blok.PostProfessionText }}</p>

      <div v-if="blok.HeroIntroText" class="Hero-IntroText">
        {{ blok.HeroIntroText }}
      </div>
      </div>
    </div>
  </div>
  </template>
   
  <script setup>
  const props = defineProps({ blok: Object })
  </script>

<style scoped lang="scss">
@import "./HeroHome.scss";
</style>