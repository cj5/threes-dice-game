<template>
  <div id="app">
    <div class="container">
      <div class="heading-wrapper">
        <h1>Threes</h1>
        <h2>Dice game</h2>
      </div>
      <div class="gameboard" :class="started">
        <div class="die-wrapper">
          <die />
          <die />
          <die />
          <die />
          <die />
        </div>
        <div class="action-btn-wrapper">
          <button role="button" class="btn" @click="roll" v-if="showActionBtn">
            {{ actionBtnText }}
          </button>
          <span class="directions" v-if="showActionBtn === false">
            {{ directions }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import die from './components/die'

export default {
  name: 'app',
  components: {
    die
  },
  computed: {
    ...mapState([
      'started',
      'actionBtnText',
      'showActionBtn',
      'directions'
    ])
  },
  methods: {
    ...mapActions([
      'roll'
    ])
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
