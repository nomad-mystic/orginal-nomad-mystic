// file =  scripts.js
// Programmer = Keith Murphy
// date created = 10-23-2014
// last mod = 12-27-2014




$(document).ready(function() {
	

/*-------this is for the schoool showcase on nomad mystic.com----*/
	//$('#showcase#ui-id-1').hide();
	$('#showcase').accordion({
		collapsible: true,
		heightStyle: 'panel'
	});//end accordion
	$('#inneracc').accordion({
		heightStyle: 'panel'
	});
	/*-----removed for future exploration
	$('body').click(function(){
	$('.back1').animate({
		top: '20%',
		animation: changebody,
		left: '10%'
	});//end animate 
	});//end click----*/

/*-----this is for the light box on nomadmystic.com----*/
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
/*-------end fancybox.js stuff----*/

	



	// This is for the recent tool tip functions Which will work on hover
	///this is not working......
	$('#imgtooltip').hover( function() {
		$(document).tooltip({
			items: 'a',
			content: function() {
				var element = $(this);
				if  (element.attr('id') === 'imgtooltip') {
					return '<img src="http://nomadmystic.com/wp-content/uploads/2014/12/close-to-final-.jpg" alt="Celebratory Elixir Christmas Labels for Nomad Mystic."/>';
				}
			}
		});
	});
	/*-----this is for the tooltips for the recent page----*/
	$('.imgtooltip').tooltip({
		content: '<img src="http://nomadmystic.com/wp-content/uploads/2014/12/close-to-final-.jpg" alt="Celebratory Elixir Christmas Labels for Nomad Mystic."/>'
	});
	/*-----testing out how to make smiple nav change for small screens---*/
	$('.open-panel').click( function() {
		$('html').addClass('openNav');
	});//end the add openNav 
	$('.close-panel, #content').click( function() {
		$('html').removeClass('openNav');
	});


}); //end ready 