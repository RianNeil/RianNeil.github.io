"use strict";
	
	//set your video options
	var source = '52262947',
	sound = 0,
	image_replacement = true;
	
	//start the video functios. 
	if (image_replacement == true){
		
		//If you want the option with image replacement
		if( !device.tablet() && !device.mobile() ) {
			$(function(){
				$('#fullscreen-vimeo').bgVimeoVideo({
					videoId: source,
					videoVolume: sound
			    });
			});
		} else {
			$('#bgimg').addClass('poster-image');
		}
		
	} else{
		
		//If you don't want the option with image replacement
		$(function(){
			$('#fullscreen-vimeo').bgVimeoVideo({
				videoId: source,
				videoVolume: sound
		    });
		});
		
	}
			
