//fixing refresh issues
history.scrollRestoration = "manual";

 window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.querySelector('html').style.scrollBehavior = '';
}

//closing nav bar
function closeNav() {
    document.getElementById("navbar").style.height = "0%";
    document.getElementById("open-menu").style.display = "block";
}

//openin nav bar
function openNav(){
    document.getElementById("navbar").style.height = "100%";
    document.getElementById("open-menu").style.display = "none";
}