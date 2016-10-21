// ;(function($){
	//iscroll4
	var homeis;
	init()
	function init(){
		homeis = new iScroll("main",{
					onBeforeScrollStart:function(e){
						var tar = e.target||e.srcElement;
						var tag = tar.nodeName.toLowerCase();
						if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
							e.preventDefault();
					},
					vScrollbar  :false//隐藏垂直滚动条
				});
		document.documentElement.style.fontSize = document.documentElement.clientWidth/10.80+"px";
	};
// })(Zepto);