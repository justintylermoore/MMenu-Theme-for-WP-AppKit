define(['jquery', 'core/theme-app', 'theme/js/jquery.mmenu.all.min'],function($, App){
    
	App.on( 'info:app-ready', function(){
		
		$( "#menu" ).mmenu( 
			{
				extensions: [ "theme-black" ],
				navbar: false,
				navbars: {
					height: 4,
					content: [
						'<a href="4058426638" class="fa fa-phone"></a>',
						'<img src="img/bmchs.png" />',
						'<a href="https://mail.google.com/mail/u/0/#inbox " class="fa fa-envelope"></a>'
					]
				}
			}
		);

		$("#menu").on("click","a",function(){
			App.navigate($(this).attr('href'));
		});
	
	});
	
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
