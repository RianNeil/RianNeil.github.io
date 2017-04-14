"use strict";

	//set your video options
	// var source = 'vids/video.mp4',
		sound = false,
		image_replacement = true;
	
	//start the video functios. 
	if (image_replacement == true){
		
		//If you want the option with image replacement
		if( !device.tablet() && !device.mobile() ) {
			(function($) {
				    var BV = new $.BigVideo();
					BV.init();
					if (sound == true){
						BV.show(source);
					} else {
						BV.show(source,{ambient:true});
					}
				})(jQuery);
		} else {
			$('#bgimg').addClass('poster-image');
		}
		
	} else{
		
		//If you don't want the option with image replacement
		(function($) {
			// initialize BigVideo
		    var BV = new $.BigVideo();
			BV.init();
			if (sound == true){
				BV.show(source);
			} else {
				BV.show(source,{ambient:true});
			}
		})(jQuery);
	}



