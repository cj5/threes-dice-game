<template>
  <div @click="toggleDieSelection">
    <div class="die">
      <span class="saved-die">Saved</span>
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
/* eslint-disable */

import { mapActions } from 'vuex';

export default {
  name: 'die',
  methods: {
    ...mapActions([
      'toggleDieSelection'
    ])
  }
}
</script>
