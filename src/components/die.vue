<template>
  <div>
    <div class="die" :class="randDieValue">
      <!-- <span>{{ randDieValue }}</span> -->
      <span class="spot spot-1"></span>
      <span class="spot spot-2"></span>
      <span class="spot spot-3"></span>
      <span class="spot spot-4"></span>
      <span class="spot spot-5"></span>
      <span class="spot spot-6"></span>
      <span class="spot spot-7"></span>
      <span class="spot spot-8"></span>
      <span class="spot spot-9"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'die',
  data() {
    return {
      dieValue: ''
    }
  },
  computed: {
    randDieValue() {
      const randValue = Math.floor(Math.random() * 6) + 1
      if (randValue == 1) {
        return this.dieValue = 'one'
      } else if (randValue == 2) {
        return this.dieValue = 'two'
      } else if (randValue == 3) {
        return this.dieValue = 'three'
      } else if (randValue == 4) {
        return this.dieValue = 'four'
      } else if (randValue == 5) {
        return this.dieValue = 'five'
      } else if (randValue == 6) {
        return this.dieValue = 'six'
      }
    }
  }
}
</script>
