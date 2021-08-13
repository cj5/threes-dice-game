<script>
  import { users } from '../store';
</script>

<div class="active-users">
  <ul id="users">
    {#each $users as user}
    <li>{ user.name }</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .active-users {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 200px;
    border: 1px solid #555;
    padding: 20px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding-bottom: 5px;
  }
  li:last-of-type {
    padding-bottom: 0;
  }
</style>
