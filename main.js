$(document).ready(function(){
	
console.log("hello world");

var toggleIt = function(){
	$(".box").toggle();
}

$("body").on("click", toggleIt);

});