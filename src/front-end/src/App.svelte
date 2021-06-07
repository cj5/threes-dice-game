<script>
	import { onMount } from 'svelte'

  let data

  onMount(async () => {
    try {
      await fetch(`http://localhost:3000/`)
        .then(response => response.json())
        .then(d => data = d)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  });
</script>

<main>
  {#if data}
    {#each data as item}
      <p>{item.id}: {item.name}</p>
    {/each}
  {:else}
    <p class="loading">loading...</p>
  {/if}
</main>

<style>

</style>
