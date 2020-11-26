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


//for redirection to a new page, socials footer
function redirect(val){
    switch(val){
        case 0:
            window.open("https://linkedin.com/in/omid-shahidi", "_blank");
            break;
        case 1:
            window.open("https://github.com/TheOmid", "_blank");
            break;
        case 2:
            window.open("https://twitter.com/u_omid", "_blank");
            break;
        case 3:
            window.open("mailto: omidsh@umich.edu", "_blank");
            break;
        case 4:
            window.open("https://open.spotify.com/user/22fgjchkktikjz2zpeg62uydq?si=WpA5Qsk9S4GJrzcTHihAeQ", "_blank");
            break;
    }
            
}