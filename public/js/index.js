
;(function($){

	function getData(){
		var Data = null;
		$.ajax({
			url:"../data/indexdata.json",
			dataType:"json",
			type:"get",
			async:false,
			success:function(data){
				Data = data;
			}
		})
		return Data;
	}
	var data = getData()
	console.log(data[0].img)
	var str = '';
	for(i in data){
		str += '<section>'+
						'<div class="con_top">'+
							'<img src="'+data[i].img+'" alt="" data-img="">'+
						'</div>'+
						'<div class="con_bot">'+
							'<h1>'+data[i].h1+'</h1>'+
							'<h2>'+data[i].h2+'</h2>'+
							'<p>'+
								'<small>'+data[i].address+'</small>'+
								'<small>'+data[i].time+'</small>'+
							'</p>'+
						'</div>'+
					'</section>';
	}
	$(".iscroller").html(str)
	homeis.refresh();
})(Zepto);