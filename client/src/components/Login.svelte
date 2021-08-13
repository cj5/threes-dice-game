<script>
  import { users, ui } from '../store';

  const socket = io('http://localhost:3000/');
  let username;

  const handleSubmitNewUser = () => {
    socket.emit('addUser', { data: username })
    $ui.showLogin = false;
  };

  socket.on('addUser', ({ data }) => {
    handleAddUser(data);
  });

  socket.on('removeUser', () => {
    console.log('removeUser()');
  });

  const handleAddUser = (username) => {
    $users = [...$users, {
      id: $users.length + 1,
      name: username,
    }];
    console.log(JSON.stringify($users, null, 2))
  };
</script>

<div class="login" class:hide="{!$ui.showLogin}">
  <div>
    <label for="username" style="margin-bottom: 5px;">Enter your name:</label>
    <input type="text" id="username" bind:value={username}>
    <button on:click={handleSubmitNewUser}>Submit</button>
  </div>
</div>

<style lang="scss">
  .login {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 9;
    &.hide {
      display: none;
    }
  }
</style>
