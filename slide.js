var x = document.getElementById("c1");
var h = "50%"
if($(window).height() > $(window).width())
	{
		$("#a1").css({"height":h});
		$("#a2").css("height",h);
		$("#a3").css("height",h);
		$("#b1").css("height",h);
		$("#b2").css("height",h);
		$("#b3").css("height",h);
		$("#c1").css("height",h);
		$("#c2").css("height",h);
		$("#c3").css("height",h);
		
	}

var count = 3;
x.addEventListener("animationiteration", function(){
	
	$(".slideshow--hero .slide1").css("background-image" , "url(./img/"+(count%15)+".jpg)");
	$(".slideshow--contrast .slide1").css("background-image","linear-gradient(to bottom, rgba(200, 200, 75, 0.25) 0, rgba(200, 75, 75, 0.5) 100%), url(./img/"+(count%15)+".jpg)");
	$(".slideshow--hero .slide2").css("background-image" , "url(./img/"+((count+1)%15)+".jpg)");
	$(".slideshow--contrast .slide2").css("background-image","linear-gradient(to bottom, rgba(200, 200, 75, 0.25) 0, rgba(200, 75, 75, 0.5) 100%), url(./img/"+((count+1)%15)+".jpg)");
	$(".slideshow--hero .slide3").css("background-image" , "url(./img/"+((count+2)%15)+".jpg)");
	$(".slideshow--contrast .slide3").css("background-image","linear-gradient(to bottom, rgba(200, 200, 75, 0.25) 0, rgba(200, 75, 75, 0.5) 100%), url(./img/"+((count+2)%15)+".jpg)");
	count+=3;
});