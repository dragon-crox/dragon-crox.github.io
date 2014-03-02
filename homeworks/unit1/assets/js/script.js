$("#search-form").submit(function(event) {
	$("#search-form").hide();
	$("#featured-product-carousel").parent().hide();
	$("#featured-product-list").parent().hide();
	$("#search-result-list").parent().show();
	event.preventDefault();
});

$(".input-group.date").datepicker({
});