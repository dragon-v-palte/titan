var upButton = document.getElementById("button-up");

var pushPin = document.getElementById("push-pin");
var hero = document.getElementsByClassName("hero-block")[0];
var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

window.onscroll = function() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
		upButton.style.display = "block";
	else
		upButton.style.display = "none";
	stickyMenu();
}

function stickyMenu() {
	if (window.pageYOffset > sticky && pushPin.classList.contains("pressed")) {
		menu.classList.add("sticky");
		hero.style.paddingTop = "60px";
	} else {
		menu.classList.remove("sticky");
		hero.style.paddingTop = 0;
	}
}

function upFunction() {
	scrollUp(800);
}

function scrollUp(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

pushPin.onclick = function() {
	pushPin.classList.toggle("pressed");
	stickyMenu();
}