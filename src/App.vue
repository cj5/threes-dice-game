<template>
  <div id="app">
    <div class="container">
      <div class="heading-wrapper">
        <h1>Threes</h1>
        <h2>Dice game</h2>
      </div>
      <div class="game" :class="{ started }">
        <div class="die-wrapper">
          <die class="die-pos-1" :class="dieValue_1" />
          <die class="die-pos-2" :class="dieValue_2" />
          <die class="die-pos-3" :class="dieValue_3" />
          <die class="die-pos-4" :class="dieValue_4" />
          <die class="die-pos-5" :class="dieValue_5" />
        </div>
        <div class="action-btn-wrapper">
          <button role="button" class="btn" @click="roll" v-if="showActionBtn">
            {{ actionBtnText }}
          </button>
          <span class="directions" v-else>
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
      'dieValue_1',
      'dieValue_2',
      'dieValue_3',
      'dieValue_4',
      'dieValue_5',
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
