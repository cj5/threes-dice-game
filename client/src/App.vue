<template>
  <div id="app">
    <h1>Hello</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let ws = new WebSocket('ws://localhost:5000')
    ws.onmessage = message => {
      const response = JSON.parse(message.data)
      console.log(response);
    }
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: rgb(48, 25, 177);
  margin: 30px 100px;
}
</style>
