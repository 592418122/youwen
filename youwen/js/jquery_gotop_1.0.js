(function($){
	$.fn.extend({
		"gotop":function(options){
			var kk={"animate":"normal","speed":500};
			var uzi=$.extend(kk,options);
			
	$(this).each(function(index,item) {
				$(window).on("scroll",function() {
					if ($(window).scrollTop() > 50) {
						if (uzi.animate == "normal") {
							$(item).show();
						} else if (uzi.animate == "slide") {
							$(item).slideDown();
						} else if(uzi.animate == "fade") {
							$(item).fadeIn();
						}
						
					} else {
						if (uzi.animate == "normal") {
							$(item).hide();
						} else if (uzi.animate == "slide") {
							$(item).slideUp();
						} else if(uzi.animate == "fade") {
							$(item).fadeOut();
						}
					}
				});
				
				$(this).on("click",function() {
					$("body,html").animate({"scrollTop":0},uzi.speed);
				});
			});
		}
	});
	
	
})(jQuery);