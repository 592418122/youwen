require.config({
	paths: {
		"jquery":["js/jquery-1.10.2.min"],
		"w":["js/wow.min"],
		"fp":["js/jquery.fullPage"],
		"gt":["js/jquery_gotop_1.0"]
	}
});

require(["jquery","w","fp","gt"],function($,w,fp,gt){
	alert("success!")
},function(){
	alert("error!")
})
