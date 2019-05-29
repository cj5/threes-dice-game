<template>
  <div id="app">
    <div class="container">
      <div class="heading-wrapper">
        <h1>Threes</h1>
        <h2>Dice game</h2>
      </div>
      <div class="gameboard">
        <die />
        <die />
        <die />
        <die />
        <die />
      </div>
    </div>
  </div>
</template>

<script>
import die from './components/die'

export default {
  name: 'app',
  components: {
    die
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
