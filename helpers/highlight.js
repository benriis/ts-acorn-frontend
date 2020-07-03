var hljs = require('highlight.js/lib/core');
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('elixir', require('highlight.js/lib/languages/javascript'));

module.exports = hljs;