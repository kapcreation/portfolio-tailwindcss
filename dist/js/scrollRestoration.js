// Set scrollRestoration to "manual" before page is unloaded
window.addEventListener('beforeunload', function() {
  history.scrollRestoration = 'manual';
});

// Restore scrollRestoration to its default value after page has finished loading
window.addEventListener('load', function() {
  history.scrollRestoration = 'auto';
});
