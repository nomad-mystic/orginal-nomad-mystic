// file =  customjs.js
// Programmer = Keith Murphy
// date created = 10-23-2014
// last mod = 11-29-2014

$(document).ready(function(){
	$('.fancybox').fancybox({
		openEffect : 'elastic',
		closeEffect : 'elastic',
		openSpeed : 200,
		closeSpeed : 200
	});//end fancybox for gallery one
		
	$('.iframefancy').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
			}
	}); //end fancy iframe

	$('#showcase').accordion({
		collapsible: true,
		heightStyle: 'panel'
	});//end accordion
	
	$('#inneracc').accordion({
		collapsible: true,
		heightStyle: 'panel'
	});

});//end ready 