<script>
	// import { onMount } from 'svelte';
  import { io } from 'socket.io-client';

  const socket = io('http://localhost:3000/');
  let username;
  const users = document.querySelector('#users');

  socket.on('connection', () => {
    console.log('hello????')
  })

  const handleSubmitNewUser = () => {
    console.log('handleSubmitNewUser()', username)
    socket.emit('addUser', { data: username })
  }

  socket.on('addUser', ({ data }) => {
    console.log('addUser()')
    handleAddUser(data);
  })

  const handleAddUser = (username) => {
    console.log('handleAddUser()')
    users.appendChild(addUserEl(username));
  }

  const addUserEl = (username) => {
    console.log('username()')
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(username));
    return li;
  }


  // let data;
  // onMount(async () => {
  //   try {
  //     await fetch(`http://localhost:3000/`)
  //       .then(response => response.json())
  //       .then(d => data = d);
  //   } catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // });
</script>

<main>
  <label for="username" style="margin-bottom: 5px;">Enter your name:</label>
  <input type="text" id="username" bind:value={username}>
  <button on:click={handleSubmitNewUser}>Submit</button>

  <div class="active-users">
    <ul id="users"></ul>
  </div>

  <!-- {#if data}
    {#each data as item}
      <p>{item.id}: {item.name}</p>
    {/each}
  {:else}
    <p class="loading">loading...</p>
  {/if} -->
</main>

<style>
  .active-users {
    position: absolute;
    top: 20px;
    right: 20px;
    border: 1px solid #555;
    padding: 20px;
  }
</style>
