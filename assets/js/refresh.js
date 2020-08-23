history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.querySelector('html').style.scrollBehavior = '';
}
