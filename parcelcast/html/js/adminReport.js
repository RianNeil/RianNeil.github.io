	
$(document).ready(function() {
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		var report_height = $('.admin-report-body').height();
		console.log(report_height+"+"+w_height);
		if(report_height > w_height-150)
		{
			$('.admin-report-body').css({'height':w_height-150,'overflow-y':'scroll'});
		}
		else {
			$('.admin-report-body').css({'height':w_height-150,'overflow-y':'scroll'});	
		}
		

	}
	function chartRefresh()
	{
		eval(
	  		Morris.Bar({
			  element: 'graph_1',
			  data: [
			     {x: 'Sat/2', y: 3},
			    {x: 'Sun/3', y: 10},
			    {x: 'Mon/4', y: 20},
			    {x: 'Tue/5', y: 30},
			    {x: 'Wed/6', y: 40},
			    {x: 'Thu/7', y: 50},
			    {x: 'Fri/8', y: 60}  
			  ],
			  xkey: 'x',
			  ykeys: ['y'],
			  labels: ['$'],
			  barColors: function (row, series, type) {
			    if (type === 'bar') {
			      var red = Math.ceil(255 * row.y / this.ymax);
			      return 'rgb(' + red + ',0,0)';
			    }
			    else {
			      return '#000';
			    }
			  }
			})
  		);
		eval(
	  		Morris.Bar({
			  element: 'graph_2',
			  data: [
			    {x: 'Sat/2', y: 3},
			    {x: 'Sun/3', y: 10},
			    {x: 'Mon/4', y: 20},
			    {x: 'Tue/5', y: 30},
			    {x: 'Wed/6', y: 40},
			    {x: 'Thu/7', y: 50},
			    {x: 'Fri/8', y: 60}  
			  ],
			  xkey: 'x',
			  ykeys: ['y'],
			  labels: ['cnt'],
			  barColors: function (row, series, type) {
			    if (type === 'bar') {
			      var blue = Math.ceil(255 * row.y / this.ymax);
			      return 'rgb(0,' + blue + ',0)';
			    }
			    else {
			      return '#000';
			    }
			  }
			})
		);
	}
	chartRefresh();
});