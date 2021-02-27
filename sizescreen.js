var h = $(window).height();
console.log(h);
console.log($(window).width());
var divh = $(".header").height();
$(".header").css("height",h+"px");
if($(window).width()>762)
	$(".header").css("padding",(h-divh)/2+"px 0");
console.log($(".header").height());
