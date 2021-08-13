import { writable } from 'svelte/store';

export const users = writable([]);

export const ui = writable({
  showLogin: true,
});
