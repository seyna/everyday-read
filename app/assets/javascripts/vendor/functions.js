jQuery(function(){
	analytics();
	loading();
	smooth();
	menuBtn();
});

jQuery(window).load(function(){
});

jQuery(window).resize(function(){
});

jQuery(window).scroll(function(){
});

function analytics(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-18623550-23', 'auto');
	ga('send', 'pageview');
}

function loading(){
	var fade = jQuery('#after');
	jQuery(window).load(function(){
		jQuery('#loader').fadeOut(400, function(){
			fade.animate({'opacity':1},800 );
			inviewElements();
			slider();
		});
	});
}

function smooth(){
	jQuery('a[href^=#]').click(function(){
	    var speed = 500;
	    var href= jQuery(this).attr("href");
	    var target = jQuery(href == "#" || href == "" ? 'html' : href);
	    var position = target.offset().top;
	    jQuery("html, body").animate({scrollTop:position}, speed, "swing");
	    return false;
	});
}
      
function slider(){
	(function( $ ){
		$('.slider').bxSlider({
			mode: 'fade',
			auto: true,
			pause: 4000,
			speed: 1500,
			pager: false,
			controls: false,
			touchEnabled: false
		});
		$('#hero-slider').bxSlider({
			mode: 'fade',
			auto: true,
			pause: 4000,
			speed: 1500,
			pager: false,
			controls: false,
			touchEnabled: false
		});
	})( jQuery );
}

function menuBtn(){
	(function( $ ){
	$('#menu-btn').click(function(){
		$(this).toggleClass('active');
	    return false;
	});
	
	$('#menu-btn').toggle(
		function(){
			$('#sp-menu').fadeIn(200);
	  	},
	  	function(){
		  	$('#sp-menu').fadeOut(200);
	  	}
	);
	
	$('#sp-menu a').click(function(){
		$('#menu-btn').click();
	});
	})( jQuery );
}

function inviewElements(){
	(function( $ ){
		var BUFF_PER = 0.6; // window高さを1とする
		var ACTIVE_CLASS = 'active';
		
		var $win = $( window );
		var $doc = $( document );
		var $elements = $('.inview');
		
		var scroll;
		var win_height;
		
		init();
		
		function init()
		{
			$win.on('load scroll resize', onScroll );
			onScroll();
		}
		
		function onScroll(e)
		{
			scroll = $win.scrollTop();
			win_height = $win.innerHeight();
			
			$elements.each( check );
		}
		
		function check( i, dom )
		{
			var $element = $elements.eq(i);
			var top = $element.offset().top;
			var height = $element.innerHeight();
			
			if ( scroll > top - win_height * BUFF_PER && scroll < top + height ) {
				$element.addClass( ACTIVE_CLASS );
			}
		}
		
	})( jQuery );
}