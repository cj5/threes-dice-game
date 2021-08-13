<script>
  import Login from './components/Login.svelte';
  import Users from './components/Users.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <Login />
  <Users />
</main>

<style lang="scss">
  :global(body) {
    padding: 0;
    font-family: 'Inter', Helvetica, sans-serif;
  }
</style>
