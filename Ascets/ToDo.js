$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); 
});

$("ul").on("click", "span", function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if (event.which === 13) {
		// grabing input
		var i = $(this).val();
		$(this).val("");
		// append to lists
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + i + "</li>");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text'").toggle();
});