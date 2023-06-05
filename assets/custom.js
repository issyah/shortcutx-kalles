jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{variant.id}}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });


		 faqTabs();



});


// FAQ tabs section 
function faqTabs(){
	$('.nav-tabs > .nav-item').on('click' ,function(evt){

		var $navItems = $('.nav-tabs > .nav-item');
		var $tabItems = $('.faq-section-container .tab');
		// selected tab 
		var tabId = $(this).data('ref');
		$navItems.removeClass('active');
		$(this).addClass('active');

		// select the tab items 
		$tabItems.removeClass('active');
		$(`#${tabId}`).addClass('active');
	})
}

