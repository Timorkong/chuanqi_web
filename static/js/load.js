$(document).ready(function(){
		$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
		
		if ($("#PlayBanner").length>0)
		{
			$("#PlayBanner").Xslider({
				speed: 1200, 
				space: 3000,
				auto: true, //自动滚动
				affect:'fade',
				ctag: 'div'
			});
		}

	
	setTimeout(function(){
	$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})},130)
	$("#PhotoShowGundong").jcarousellite_gundong({btn:1,list:".PicList li","visible":4,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#GamePicGundong").jcarousellite_gundong({btn:1,list:".PictureList li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	
	
	$(".PicList li").hover_animate(
			{
			  aniobj:
			  [
				  [
					  "img",					//应用对象
					  "",//初始CSS
					  "{'opacity':0.5}",		//mouseenter动画CSS
					  "{'opacity':1}",			//mouseleave动画css
					  "300",					//mouseenter 时间
					  "300"						//mouseleave 时间
				  ],
				  [
					  "self",					//应用对象
					  "",		//初始CSS
					  "{'margin-top':'-8px'}",			//mouseenter动画CSS
					  "{'margin-top':'0'}",			//mouseleave动画css
					  "300",					//mouseenter 时间
					  "200"						//mouseleave 时间
				  ]
			  ]
			}
			
		)
		
		
	/*播放视频*/		 
	$("#btn_play").one("click",function(){
		var videourl=$(this).attr("data-file")	
		var autoplay=$(this).attr("data-autoplay")	
		var playobj=$(this).attr("data-playobj")
		if ($(playobj).length==0) return false;
		
		if (videourl)
		{
			
		var w=$(playobj).outerWidth()
		var h=$(playobj).outerHeight()
			
		var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">'
			writehtml+='<param name="movie" value="flash/Flvplayer.swf">'
			writehtml+='<param name="quality" value="high">'
			writehtml+='<param value="transparent" name="wmode">'
			writehtml+='<param name="allowFullScreen" value="true">'
			writehtml+='<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
			writehtml+='<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="/www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
			writehtml+='</object>'
			
			$(this).stop(true,false).animate({opacity: 0}, 500,function(){$(playobj).html(writehtml)})
		}
		
		
	})	
		
		
		
	$("#Video").hover_animate(
			{
			  aniobj:
			  [
				  [
					  "img",					//应用对象
					  "",//初始CSS
					  "{'opacity':0.7}",		//mouseenter动画CSS
					  "{'opacity':1}",			//mouseleave动画css
					  "300",					//mouseenter 时间
					  "300"						//mouseleave 时间
				  ]
				 
			  ]
			}
			
		)
		
	$(".pics_").hover_animate(
			{
			  aniobj:
			  [
				  [
					  "img",					//应用对象
					  "",//初始CSS
					  "{'opacity':0}",		//mouseenter动画CSS
					  "{'opacity':1}",			//mouseleave动画css
					  "300",					//mouseenter 时间
					  "300"						//mouseleave 时间
				  ]
				 
			  ]
			}
			
		)
		
		
		$.fn.css3_allnth([
				'.rechargeList li span:nth-child(1){width:147px;}',
				'.rechargeList li span:nth-child(2){width:89px;}',
				'.rechargeList li span:nth-child(3){width:126px;}',
				'.rechargeList li span:nth-child(4){width:197px;}',
				'.huishoulist li span:nth-child(1){width:190px;}',
				'.huishoulist li span:nth-child(2){width:178px;}',
				'.huishoulist li span:nth-child(3){width:202px;}',
				'.fenqulist li span:nth-child(1){width:219px;}',
				'.fenqulist li span:nth-child(2){width:339px;}',
				'#menu ul li:nth-child(3){margin-left:400px;}',
				'#menu ul li:nth-child(4){margin-right:0px;}'
					
				])	
	
})



//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}

//加载滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]")
	if (scrollobj.length==0) return false;
	scrollobj.each(function(index, element) {
			var self=$(this)
			if (self.length==0)  return false;
			
			var h=parseInt(self.attr("data-scroll-height")),
				w=parseInt(self.attr("data-scroll-width")),
				color=self.attr("data-scroll-color");
				self.css({"width":"100%"});
				self.wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
}
$.fn.hover_animate=function(obj){
	var time_delay=null,runlist=[],runlist_end	=[],create_var=[],set_var=[],self=$(this)
		if (self.length==0) return false;
		if (obj.aniobj.length==0) return false;
		if (obj.set_class=="" || typeof (obj.set_class)=="undefined") {$.extend(obj,{set_class:"hover"});	}
		if (typeof(obj.delaytime)!="number" || typeof(obj.delaytime)=="undefined"){$.extend(obj,{delaytime:100});	}
		
		$.each(obj.aniobj,function(index,val){
			if (val.length<6) return false;
			var setobj			=	val[0],
				setobj_			=	setobj.replace(".","")
				animate_css		=	val[1],
				animate_start	=	val[2],
				animate_end		=	val[3],
				animate_easing	=	val[4],
				animate_easing2	=	val[5],
				run				=	'',
				run_end			=	''
				if (setobj=="") return false;
				if (animate_css!="")
				{
					create_var.push('var _'+setobj_+'')
					if (setobj=="self")
					{set_var.push('_'+setobj_+'=[self]');}
					else
					{set_var.push('_'+setobj_+'=[self].find("'+setobj+'")');}
					
					run='_'+setobj_+'.css('+animate_css+').stop(true,false).animate('+animate_start+','+animate_easing+')'
					runlist.push(run)
				}		
				else if (animate_start!="")
				{
					create_var.push('var _'+setobj_+'')
					if (setobj=="self")
					{set_var.push('_'+setobj_+'=[self]');}
					else
					{set_var.push('_'+setobj_+'=[self].find("'+setobj+'")');}
					
					run='_'+setobj_+'.stop(true,false).animate('+animate_start+','+animate_easing+')'
					runlist.push(run)
				}
				if (animate_end!="")
				{
					run_end='_'+setobj_+'.animate('+animate_end+','+animate_easing2+')'
					runlist_end.push(run_end)
				}
		})
		var selfobj=null;
		
		self.unbind(".s")
		$.each(create_var,function(index,val){eval(val);})
		self.bind("mouseenter.s",function(){
			selfobj=$(this)
			$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"));})
			clearTimeout(time_delay)	
			time_delay=setTimeout(function(){
					if(!selfobj.is(":animated"))
					{
						self.addClass(obj.set_class);
						
						$.each(runlist,function(index,val){eval(val)})	;
					}
			},obj.delaytime)
		})
		.bind("mouseleave.s",function(){
			clearTimeout(time_delay)	
			if (selfobj.is("."+obj.set_class))
			{		
				$.each(runlist_end,function(index,val){eval(val);})	
				selfobj.removeClass(obj.set_class);
			}
		})
}

//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length==0) return false;
			var items=options.list,config;
			if (self.find(items).length<=options.visible) 
			{
				var width=self.find(options.list).parent().outerWidth()
				self.css({"margin":"0 auto","width":width})
			return false;	
			}
			else
			{
				var liobj=self.find(options.list)
				var width=liobj.outerWidth()
				var margin=parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right"));
				width+=margin
				self.css({"margin":"0 auto","width":width*options.visible})
			}
			self.css("overflow","visible");
			
			if (self.find(items).is("div"))
			{
				self.find(items).wrap("<li></li>");
				self.find(items).parent().wrapAll("<ul class='templist'></ul>");		
				items=".templist li"
			}
			self.find(items).parent().wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			
			
			if (options.btn!=0)
			{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>')
			}
			
			self.find(".gundong").each(function(index){
				
				config={
							btnPrev: $(this).find(".move_left:eq("+index+")"),
							btnNext: $(this).find(".move_right:eq("+index+")"),
							visible:1,
							auto: 2500 ,
							speed: 300
						}	
				if (options.btn==0)		
				{
					$.extend(config, {btnPrev:null,btnNext:null});							
				}
				$.extend(config, options);
				$(this).find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}
		
		
		
		
		
$.fn.css3_allnth=function(css){
		if (BrowseVer=="ie7" || BrowseVer=="ie6" || BrowseVer=="ie8")
		{
				$.each(css,function(index,val){
					if (val.indexOf("{")==0) return false;
						var temp_css		=	val.split("{"),
						 	css_select		=	temp_css[0],
						 	css_val			=	temp_css[1].replace("}",""),
							contents		=	css_val.indexOf("content"),
							types			=	""
						if (css_select.indexOf(":before")>0)
						{
							css_select=css_select.replace("::before","").replace(":before","")
							if (contents>=0){types="before";}else{types="first";}
						}
						else if (css_select.indexOf(":after")>0)
						{
							css_select=css_select.replace("::after","").replace(":after","")
							if (contents>=0){types="after";}else{types="last";}
						}
						else
						{types="css"}
						$.fn.css3_before_after(css_select,$.fn.format_css(css_val),types)
				})
		}
}
$.fn.format_css=function(css){
	var temp	=	css.split(";"),temps	=	'',new_css	=	""
	$.each(temp,function(index,val){
		if (val)
		{
			if (val.indexOf('""')>0)
			{temps='"'+val.replace(':','":')+',';
			 temps=temps.replace('""','\'\'');}
			else
			{temps='"'+val.replace(':','":"')+'",';}
			if (temp.length-1==index+1){temps=temps.replace(",","");}
			new_css+=temps
		}
	})
	return new_css
}
$.fn.css3_before_after=function(obj,objlist,types){
	obj=$(obj)
	if (obj.length==0) return false;
	switch (types)
	{
		case "before"	:
			obj.each(function(index, element) {
				var divname="div"+$.fn.ran(5)
				$(this).prepend("<div id='"+divname+"'></div>")
				var objs=$("#"+divname)
				eval('objs.css({'+objlist+'})')
		   });
		break;
		case "after"	:
			obj.each(function(index, element) {
				var divname="div"+$.fn.ran(5)
				$(this).append("<div id='"+divname+"' style='font-size:0;padding:0;line-height:0;'></div>")
				var objs=$("#"+divname)
				eval('objs.css({'+objlist+'})')
		   });
		break;
		case "last"	:
			obj.each(function(index, element) {
				var objs=$(this).find(":last-child")
				eval('objs.css({'+objlist+'})')
		   });
		break;
		case "first"	:
			obj.each(function(index, element) {
				var objs=$(this).find(":first")
				eval('objs.css({'+objlist+'})')
		   });
		break;
		case "css"	:
			obj.each(function(index, element) {
				var objs=$(this)
				eval('objs.css({'+objlist+'})')
		   });
		break;
	}
}

$.fn.ran=function(m){
	m = m > 13 ? 13 : m;
	var num = new Date().getTime();
	return num.toString().substring(13 - m);
}

//返回浏览器类型 
$.fn.Browser_ver=function(){
		var navmsg=navigator.userAgent
		var ver='1';
		if(navmsg.indexOf("MSIE")>0){   
			  ver="";
			  if(navmsg.indexOf("MSIE 6.0")>0){ver='ie6'}   
			  if(navmsg.indexOf("MSIE 7.0")>0){ver='ie7'}   
			  if(navmsg.indexOf("MSIE 8.0")>0 && !window.innerWidth){ver='ie8'}   
			  if(navmsg.indexOf("MSIE 9.0")>0){ver='ie9'}   
			  if(navmsg.indexOf("MSIE 10.0")>0){ver='ie10' }   
			  if(navmsg.indexOf("MSIE 11.0")>0){ver='ie11'}   
		} 
		else if(ver=="1" && navmsg.indexOf("Safari")>0){ 
			ver="Saifari"
		}
		else if(ver=="1" && navmsg.indexOf("Firefox")>0){ 
			ver="Firefox"
		}
		else if(ver=="1" && navmsg.indexOf("Opera")>0){ 
			ver="Opera"
		}
		return ver	
}
var BrowseVer=$.fn.Browser_ver()		
	
	