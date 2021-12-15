<template>
<div class="clock">
  <img class="melody" src="../assets/s-melody.png">
  <img class="piano" src="../assets/s-piano.png">
  <time class="days">{{ days }}<span class="small">Days</span> </time>
  <time class="time">{{ hours }}:{{ minutes }}:{{ seconds }}</time>
</div>
</template>

<script setup>
import { ref } from 'vue'

const startDate = new Date();
startDate.setFullYear(2021);
startDate.setMonth(8);
startDate.setDate(28);
startDate.setHours(21);
startDate.setMinutes(0);
startDate.setSeconds(0);
startDate.setMilliseconds(0);

function setTime() {
    const now = Date.now();
    const fix = (now - startDate);
    const seconds = parseInt(fix / 1000, 10);
    const s = seconds % 60;
    const minutes = (seconds - s) / 60;
    const m = minutes % 60;
    const hours = (minutes - m) / 60;
    const h = hours % 24;
    const days = (hours - h) / 24;
    
    return {
      days: days.toString(),
      hours: h.toString().padStart(2,'0'),
      minutes: m.toString().padStart(2,'0'),
      seconds: s.toString().padStart(2,'0')
    }
}

const t = setTime();

const days = ref(t.days)
const hours = ref(t.hours)
const minutes = ref(t.minutes)
const seconds = ref(t.seconds)

setInterval(() => {
  const t = setTime();
  days.value = t.days;
  hours.value = t.hours;
  minutes.value = t.minutes;
  seconds.value = t.seconds;
}, 1e3)
</script>

<style lang="stylus">
.melody,
.piano
  position absolute
  top 5px
  transform: translateY(-100%)
.melody
  animation jump 2s 1s infinite
  left 52%
.piano
  animation jump 2s infinite
  right 52%
.clock
  box-shadow: 0 0 3px #f9d
  position: relative
  padding .2rem
  background-color #f9d
  border-radius .2rem
  border 3px solid #fff
  color #fff
  text-shadow 0 0 3px #333
  background-color #fcd
  .days
    font-size .96rem
    margin-right: .1rem
    .small
      font-size .28rem
  .time
    font-size .64rem

@keyframes jump
  0%
    transform: translateY(-100%) translateZ(0deg)
  5%
    transform: translateY(-100% + 5px)
  10%
    transform: translateY(-100%)
  15%
    transform: translateY(-100% + 5px)
  20%
    transform: translateY(-100%)
  100%
    transform: translateY(-100%)
</style>