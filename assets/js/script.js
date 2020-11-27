//fixing refresh issues
history.scrollRestoration = "manual";

 window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.querySelector('html').style.scrollBehavior = '';
}

//resposnive nav bar
function navFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
      x.className += " responsive";
      document.getElementById("bars").innerHTML="menu_open";
    } else {
      x.className = "nav";
      document.getElementById("bars").innerHTML="menu";
    }
    
}