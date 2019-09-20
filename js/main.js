var upButton = document.getElementById("button-up");

var pushPin = document.getElementById("push-pin");
var headerTop = document.getElementsByClassName("header__top")[0];
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
		headerTop.style.paddingBottom = "80px";
	} else {
		menu.classList.remove("sticky");
		headerTop.style.paddingBottom = "20px";
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

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	gutter: '.gutter-sizer',
	percentPosition: true
});