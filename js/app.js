//appends an "active" class to .info and .info-content when the "Open" button is clicked
$("#infoButton").on("click", function(){
  $(".info-overlay, .info-content").addClass("active");
});

//removes the "active" class to .info and .info-content when the "Close" button is clicked 
$("#info-close, .info-overlay").on("click", function(){
  $(".info-overlay, .info-content").removeClass("active");
});



$(document).ready(function() {
	//make your canvas available in JS 
	var canvas = $("canvas")[0];
	var ctx = canvas.getContext('2d');
	//height/width of canvas
	canvas.width = 200;
	canvas.height= 400;
	//get container of canvas
	var container = $(canvas).parent();
	//redraw according to container size
	var respondCanvas = function() {
		canvas.attr('width', $(container).width());
		canvas.attr('height', $(container).height());
	}
	//redraw according to window size
	$(window).resize(respondCanvas);
});