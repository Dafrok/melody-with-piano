<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Clock from './components/Clock.vue'
</script>

<template>
  <Clock />
</template>

<style lang="stylus">
html,
body
  font-size: 150px
  margin 0
  padding 0
  height 100%
  background: url(./assets/bg.webp) center center no-repeat
  background-size: auto 100%
#app
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Consolas, Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%
  width: 100%

@media (max-width: 1000px)
  html,
  body
    font-size: 15vw;
</style>
