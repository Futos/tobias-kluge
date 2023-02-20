<template>
    <header>
      <div>
        <nav is="flynt-navigation-main" class="flyntComponent">
          <div class="wrapper">
            <div class="container centerMaxWidthContainer">
              <NuxtLink class="logo" to="/">
                  <img class="logo-image" src="@/assets/logo.svg" alt="">
                </NuxtLink>
                <ul class="menu">
                  <li class="menu-item">
                    <nuxt-link class="menu-link" to="/">Home</nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link class="menu-link" to="/about">About</nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link class="menu-link" to="/blog">Blog</nuxt-link>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </template>

<style scoped lang="scss">
  @import "./header.scss";
</style>