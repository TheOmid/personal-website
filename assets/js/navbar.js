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