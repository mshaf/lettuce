$(document).ready(function(){
	$(window).stellar();
	$("a").click(function(event){
		event.preventDefault()

	})

	$(".item").click(function(){
		$(".content-wrapper").hide();
		$("body").addClass("bg")
		$(".recipe").show();
		
	});

	$(".home").click(function(){
		$("body").removeClass("bg")
		$("body").css("background-image", "url(images/knitting250px.png)")
		$(".content-wrapper").show();

	})


})