const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
}
