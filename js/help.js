// JavaScript Document


function myFunction() {
    	var x = document.getElementById("myTopnav");
    	if (x.className === "topnav") {
        	x.className += " responsive";
    	} else {
        	x.className = "topnav";
    	}
	}

$(document).ready(function() {
  $('#nav-icon3').on('click', function() {
    $(this).toggleClass('open');
  });
});

$('#grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 220,
  isFitWidth: true
});

// window.sr = ScrollReveal({ duration: 1000 });
// sr.reveal('.foo', 80);

window.sr = ScrollReveal();
sr.reveal('.foo', { duration: 1000 }, 80);
