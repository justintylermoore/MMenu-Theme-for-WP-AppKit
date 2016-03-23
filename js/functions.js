define(['jquery', 'core/theme-app', 'theme/js/bootstrap.min'],function($, App){
    
	//See http://uncategorized-creations.com/app-kit/doc/#237-functions-js to 
	//learn more about what you can do in this functions.js file.
	
	
	/**
	 * Scroll to top each time a new screen is showed in the app.
	 * 'screen:showed' is an AppKit event that allows to intercept 
	 * change of screen in the app (list to post detail for example).
	 */
	App.on( 'screen:showed', function( current_screen, view ) {
		scrollTop();
	} );
	
	
	/**
	 * Get back to the top of the screen
	 */
	function scrollTop() {
		window.scrollTo( 0, 0 );
	}
	
});

define(['js/jquery.mmenu.all.min.js'],function(){
	$(function() {
				$("#menu")
					.mmenu({
		extensions 	: [ "theme-black" ],
		navbar 		: false,
		navbars		: {
			height 	: 4,
			content : [ 
				'<a href="4058426638" class="fa fa-phone"></a>',
				'<img src="img/bmchs.png" />',
				'<a href="https://mail.google.com/mail/u/0/#inbox " class="fa fa-envelope"></a>'
			]
		}
					});
});

define(['js/jquery-1.8.3.min.js'],function(){
     //Nothing for now, this is just to include the js file in our theme.
});