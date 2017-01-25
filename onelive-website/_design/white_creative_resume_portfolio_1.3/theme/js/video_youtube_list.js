	
	//set your video options
	var image_replacement = true;
	
	//start the video functios. 
	if (image_replacement == true){
	
		if( !device.tablet() && !device.mobile() ) {
			jQuery(function(){
				if (self.location.href == top.location.href){
				    var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
				   	$("#wrapper").prepend(logo);
				    $("#logo").fadeIn();
				}
				jQuery("button").not(".command").click(function(){
					jQuery("button").not(".command").removeClass("sel");
					jQuery(this).addClass("sel");
				});
				jQuery("#bgndVideo").on("YTPStart", function(){ jQuery("#eventListener").html("YTPStart")});
				jQuery("#bgndVideo").on("YTPEnd", function(){ jQuery("#eventListener").html("YTPEnd")});
				jQuery("#bgndVideo").on("YTPPause", function(){ jQuery("#eventListener").html("YTPPause")});
				jQuery("#bgndVideo").on("YTPBuffering", function(){ jQuery("#eventListener").html("YTPBuffering")});
				jQuery("#bgndVideo").mb_YTPlayer();
			});
		
		} else {
			$('#bgimg').addClass('poster-image');
			$('#bgndVideo').fadeOut();
			$('#video-content').fadeOut();
		}
	
	} else {
	
		jQuery(function(){
			if (self.location.href == top.location.href){
			    var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
			   	$("#wrapper").prepend(logo);
			    $("#logo").fadeIn();
			}
			jQuery("button").not(".command").click(function(){
				jQuery("button").not(".command").removeClass("sel");
				jQuery(this).addClass("sel");
			});
			jQuery("#bgndVideo").on("YTPStart", function(){ jQuery("#eventListener").html("YTPStart")});
			jQuery("#bgndVideo").on("YTPEnd", function(){ jQuery("#eventListener").html("YTPEnd")});
			jQuery("#bgndVideo").on("YTPPause", function(){ jQuery("#eventListener").html("YTPPause")});
			jQuery("#bgndVideo").on("YTPBuffering", function(){ jQuery("#eventListener").html("YTPBuffering")});
			jQuery("#bgndVideo").mb_YTPlayer();
		});
	
	}
	
	var videos = [
   		{videoURL:"RIQqVqQs9Xs",containment:'#video-content',autoPlay:true, mute:false, startAt:0,opacity:1, loop:false, ratio:"4/3", quality:"medium"},
   		{videoURL: "kn-1D5z3-Cs",containment:'#video-content',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", quality:"medium"},
    	{videoURL: "PGG825Hg490",containment:'#video-content',autoPlay:true, mute:false, startAt:0,opacity:1, loop:false, ratio:"4/3", quality:"medium"}
	];
	
	jQuery("#video-content").YTPlaylist(videos, true);
