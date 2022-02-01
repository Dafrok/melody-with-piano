<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Clock from './components/Clock.vue'
import { ref } from 'vue'

const status = ref(0);

async function checkKillStatus() {
  const res = await fetch('https://api.github.com/repos/Dafrok/melody-with-piano/issues/1');
  const json = await res.json();
  if (json.state === "open") {
    status.value = 1;
  }
  else if (json.state === "closed") {
    status.value = 2;
  }
}

checkKillStatus();

async function kill() {
  if (confirm('Are you sure to kill his love in certain?')) {
    if (confirm('He is still love you.Do you insist?')) {
      if (confirm('Really?')) {
        const resp = await fetch('https://melodic.dafrok.top/api/killmylove', {
          method: 'POST',
          body: 'kill my love'
        });
        const txt = resp.text();
        if (txt === 'killed') {
          status.value = 2;
        }
      }
    }
  }
}

</script>

<template>
<main v-if="status === 1">
  <Clock />
  <div class="kill" @click="kill">KILL LOVE</div>
</main>
<div v-if="status === 2" style="font-size: 16px;">
404 Error: Can't found his love. 
</div>
</template>

<style lang="stylus">
html,
body,
#app
  font-size: 150px
  margin 0
  padding 0
  height 100%
  width 100%
main
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  background: url(./assets/bg.webp) center center no-repeat
  background-size: auto 100%
  font-family: Consolas, Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%
  width: 100%
  flex-direction: column

.kill
  text-align: center;
  font-size: 5vw;
  box-shadow: 0 0 5px #666;
  margin-top: 20px;
  padding: 5px 20px;
  color: #333;
  background: #fcd;
  border-radius: 1vw;
  text-shadow: 0 0 5px #666;

@media (max-width: 1000px)
  html,
  body
    font-size: 15vw;
</style>
