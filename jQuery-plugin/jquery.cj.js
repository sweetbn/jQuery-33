$.fn.gq=function(){
	var that=this;

		$(this).find('li').on('mouseenter',function(){
			// console.log(that);
			$(this).find('span').stop().animate({top:0});
			// $('audio').load();
			$('audio').get(0).load();
			$('audio').get(0).play();
		});

		$(this).find('li').on('mouseleave',function(){
			$(this).find('span').stop().animate({top:60});
		});

		var $a=true;
		
		$(document).on('keydown',function(e){
			// console.log(that);
			if (e.keyCode>=49&&e.keyCode<=57&&$a) {
				$a=false;
				// console.log('hehe');
				
				$(that).find('li').eq(e.keyCode-49).trigger('mouseenter');
			}
		});
		
		$(document).on('keyup',function(e){
			if (e.keyCode>=49&&e.keyCode<=57) {
				$(that).find('li').eq(e.keyCode-49).trigger('mouseleave');
			}
			$a=true;
		});
	}