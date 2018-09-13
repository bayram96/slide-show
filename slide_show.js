
//$(document).ready(function() {
	var i=1; 
	var i1,i2;
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	var q=false;
		
	// the function for running the slide show - to the rigth direction
    var runSlideShow1 = function() {  
	if (q) {enable("prev");}
	if (nextSlide.attr("src")=="images/lures.jpg") { disable("next");}
	
       	$("#caption").fadeOut();
       	$("#slide").fadeOut(0,
       		function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn();					
				$("#caption").text(nextCaption).fadeIn();
			}
		)
	}
	//// the function for running the slide show - to the left direction
	var runSlideShow2 = function() { 
	enable("next");	
	if (nextSlide.attr("src")=="images/casting2.jpg") { disable("prev");}
		if (nextSlide.attr("src")=="images/casting1.jpg") { disable("prev");}

       	$("#caption").fadeOut();
       	$("#slide").fadeOut(0,
       		function () {
       	     	if (nextSlide.prev().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.prev();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn();					
				$("#caption").text(nextCaption).fadeIn();
				
			}
		)
			
	}
	
	// start the slide show
	
	var timer = setInterval(runSlideShow1, 1500);
	
	//nextSlide = nextSlide.stop();

//})
// function to play the slideshow
function play() {
	i2 = 0;
	i1+=1; 
	q = false;
	document.querySelector('#prev').disabled = true;	
	document.querySelector('#next').disabled = true;	
	//if (i1 == 2) 
	timer = setInterval(runSlideShow1, 2000);
}
// function to pause the slideshow
function stop()  {
	i1 = 0;
	i2+=1;
	q= true;
	document.querySelector('#next').disabled = false;	
	document.querySelector('#prev').disabled = false;	

	i+=1;
	// "i" variable is used to check odd or even clickes
	// if statement to "pause" and "play"
if (i % 2 ==0) { document.querySelector('#play').value = "Play";	clearInterval(timer);} 
else {document.querySelector('#play').value = "Pause";	play();}	

}

function disable(s) {
	document.querySelector('#'+ s).disabled = true;	
}
function enable(x) {
	document.querySelector('#'+ x).disabled = false;	
}
