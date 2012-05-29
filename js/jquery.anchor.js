jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	
	return this.each(function(){
		var caller = this;
		$(caller).click(function (event) {	
			event.preventDefault();
			var locationHref = window.location.href;
			//var elementClick = $(caller).attr("href");
			var elementClick = "#"+$(caller).attr("class").split(' ')[0];
			
			var destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick;
			});
		  	return false;
		});
	});
}