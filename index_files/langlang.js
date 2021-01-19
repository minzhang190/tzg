// JavaScript Document
$(document).ready(function(){
	$('a,input[type="button"],input[type="submit"],input[type="image"]').bind('focus',function(){
		if(this.blur){
			this.blur();
		};
	});
	
	$("#na-center").find("ul").hover(
		function(){
			$(this).addClass("onmouse");
		},
		function(){
			$(this).removeClass("onmouse");
		}
	);
	
	$(".tbanner").find("li").click(function(){
		$(".tbanner").find("li").removeClass();
		$(this).addClass("selected_2");
	});
	
	$(".tbanner").find("ul li:first-child").click(function(){
		$(".tbanner").find("li").removeClass();
		$(this).addClass("selected_1");
	});
	
	$(".term").find(".title").toggle(
		function(){
			$(this).parent(".term").addClass("selected");
		},
		function(){
			$(this).parent(".term").removeClass("selected");
		}
	);
	$("#others").find("a").toggle(
		function(){
			$(".address").find("table.address").css("display","block");
			$(this).css("margin-bottom","0px");
		},
		function(){
			$(".address").find("table.address").css("display","none");
			$(this).css("margin-bottom","60px");
		}
	)
	$(".language").toggle(
		function(){
			$("#language").css("display","block");
			$("#website").css("display","none");
		},
		function(){
			$("#language").css("display","block");
			$("#website").css("display","none");
		}
	)
	$(".website").toggle(
		function(){
			$("#website").css("display","block");
			$("#language").css("display","none");
		},
		function(){
			$("#website").css("display","block");
			$("#language").css("display","none");
		}
	)
	$("#language,#website").hover(
		function(){
			$(this).css("display","block");
		},
		function(){
			$(this).css("display","none");
		}
	)
	$("#language,#website").find("a").hover(
		function(){
			$(this).parent("span").addClass("onmouse");
		},
		function(){
			$(this).parent("span").removeClass("onmouse");
		}
	)
	$(".ce").find("a").click(
		function(){
			$(this).parent().children("a").removeClass("selected");
			$(this).addClass("selected");
		}
	)
	$(".area").find(".tit").click(
		function(){
			$(this).parent("div.area").toggleClass("selected");
		}
		
	)
	$("#langlang").find(".title").toggle(
		function(){
			$(".langlang").appendTo("#langlang .describe");
		},
		function(){
			$(".langlang").appendTo("#content");
		}
	)
	$("#yunwen").find(".title").toggle(
		function(){
			$(".yunwen").appendTo("#yunwen .describe");
		},
		function(){
			$(".yunwen").appendTo(".content");
		}
	)
	$("#langlang").find(".title").toggle(
		function(){
			$(".langlang").appendTo("#langlang .describe");
		},
		function(){
			$(".langlang").appendTo(".content");
		}
	)
	$("#pinyin").find(".title").toggle(
		function(){
			$(".pinyin").appendTo("#pinyin .describe");
		},
		function(){
			$(".pinyin").appendTo(".content");
		}
	)
	$("#juese").find(".title").toggle(
		function(){
			$(".juese").appendTo("#juese .describe");
		},
		function(){
			$(".juese").appendTo(".content");
		}
	)
	$(document).dblclick(function(e){
		var mydiv = $("#view");
		var x = document.documentElement.scrollLeft + e.clientX;
		var y = document.documentElement.scrollTop + e.clientY;
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		//var width = document.documentElement.scrollWidth;
		//var height = document.documentElement.scrollHeight;
		var divwidth = mydiv.attr("offsetWidth");
		var divheight = mydiv.attr("offsetHeight");

		if (x + divwidth > width) {
			x = x - divwidth;
		}
		if (y + divheight > height) {
			y = y - divheight;
		}

		mydiv.css("left", (x + "px")).css("top", (y + "px")).css("display","block");
	})
	
	$("#view").find("#close").click(function(){
		$("#view").css("display","none");
	})
	
	$(".grade").find(".item").hover(
		function(){
			$(this).addClass("onmouse");
		},
		function(){
			$(this).removeClass("onmouse");
		}
	)
	
	$(".grade").find("li").not("li:first,.disable").hover(
		function(){
			$(this).addClass("mouseover");
			//$(this).append("<div id='down'>HSK-"+this.id+"</div>");
			
			//修正IE6下背景png背景图片不透明
			DD_belatedPNG.fix('#down');			
		},
		function(){
			$(this).removeClass("mouseover");
			//$(this).find("#down").hide();
		}
	)
	
	
	
	$("#catalog").find(".sort").find("div").hover(
		function(){
			$(this).addClass("onmouse");
		},
		function(){
			$(this).removeClass("onmouse");
		}
	)
	
	$(".grade").find("li").hover(
		function(){
			$(this).next("li").addClass("next");
		},
		function(){
			$(this).next("li").removeClass("next");
		}
	)
	
	$(".grade").find("li.disable").hover(
		function(){
			$(this).next("li").addClass("dis");
		},
		function(){
			$(this).next("li").addClass("dis");
		}
	)
	
	$(".grade").find("li.selected").hover(
		function(){
			$(this).next("li").addClass("next");
		},
		function(){
			$(this).next("li").addClass("next");
		}
	)
	
	$(".grade").find("li.selected").next("li").addClass("next");
	
	$("#login").find("input.name").focus(function(){
			$(this).val("");
	})
	
	$("#login").find("input.passwd").focus(function(){
			$(this).val("");
	})
	
	$(".navi").find(".tit").click(
		function(){
			$(this).parents(".navi").children().removeClass("selected");
			$(this).parent().addClass("selected");
			$(this).parents(".navi").find(".tree").css("display","none");
			$(this).next(".tree").css("display","block");
		}
	)
	
	$(".navi").find(".title").toggle(
		function(){
			$(this).next(".branches").css("display","block");
		},
		function(){
			$(this).next(".branches").css("display","none");
		}
	)
	$(".navi").find(".subtit_expand").toggle(
		function(){
			$(this).next(".leaves").css("display","block");
		},
		function(){
			$(this).next(".leaves").css("display","none");
		}
	)

	//定时关闭节日横幅
	window.setTimeout(function(){$("#festival").slideUp("slow")},15000); 
	
	//Volume菜单展开和关闭
	$("#volume").find(".downVolume").click(function(){
		$("#downVolume").slideToggle("slow");
		$("#downUnit").slideUp("slow");
		$("#downLesson").slideUp("slow");
	})
	$("#volume").find(".volume").click(function(){
		$("#tit").find(".selectedtit").text($(this).text()+": "+$(this).attr("title"));
		$("#vonu").find(".core").text($(this).text());
	})
	$("#downVolume").find("a").click(function(){
		$("#downVolume").slideUp("slow");
		$("#volume").find(".volume").text($(this).text());
	})
	$("#voed,#voadd").click(function(){
		$("#voDot").fadeIn("slow");
		$("#unDot").fadeOut("slow");
		$("#leDot").fadeOut("slow");
		$(".edarea").fadeOut("slow");
		$(".edarea").fadeIn("slow");
	})
	
	//Unit菜单展开和关闭
	$("#unit").find(".downUnit").click(function(){
		$("#downVolume").slideUp("slow");
		$("#downUnit").slideToggle("slow");
		$("#downLesson").slideUp("slow");
	})
	$("#unit").find(".unit").click(function(){
		$("#tit").find(".selectedtit").text($(this).text()+": "+$(this).attr("title"));
		$("#unnu").find(".core").text($(this).text());
	})
	$("#downUnit").find("a").click(function(){
		$("#downUnit").slideUp("slow");
		$("#unit").find(".unit").text($(this).text());
	})
	$("#uned,#unadd").click(function(){
		$("#voDot").fadeOut("slow");
		$("#unDot").fadeIn("slow");
		$("#leDot").fadeOut("slow");
		$(".edarea").fadeOut("slow");
		$(".edarea").fadeIn("slow");
	})
	
	//Lesson菜单展开和关闭
	$("#lesson").find(".downLesson").click(function(){
		$("#downVolume").slideUp("slow");
		$("#downUnit").slideUp("slow");
		$("#downLesson").slideToggle("slow");
	})
	$("#lesson").find(".lesson").click(function(){
		$("#tit").find(".selectedtit").text($(this).text()+": "+$(this).attr("title"));
		$("#lenu").find(".core").text($(this).text());
	})
	$("#downLesson").find("a").click(function(){
		$("#downLesson").slideUp("slow");
		$("#lesson").find(".lesson").text($(this).text());
	})
	$("#leed,#leadd").click(function(){
		$("#voDot").fadeOut("slow");
		$("#unDot").fadeOut("slow");
		$("#leDot").fadeIn("slow");
		$(".edarea").fadeOut("slow");
		$(".edarea").fadeIn("slow");
	})
	
	//课程环节鼠标移上去的效果
	$(".course").find(".item").hover(
		function(){
			$(this).addClass("mouseover");
		},
		function(){
			$(this).removeClass("mouseover");
		}
	).click(function(){
		//$("#intro").slideUp("fast");
		//$("#dir").slideUp("fast");
		//$("#edit").slideUp("fast");
		//$("#player").fadeIn("slow");
		//alert($(this).find(".cntit a").eq(0).attr("href"));
		var url = $(this).find(".cntit a").attr("href") ; 
		if (url != "") {
			var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/; 
			var result = parse_url.exec(url);
			//alert(result);
			if (result == null) {
				url = "file:///" + url;
			} else if (!result[1]) {
				url = "http://" + url;
			}
			//alert(url);
			window.open(url);
		}
	})
	
	//编辑单元tab
	$("#edtit").find("div").click(function(){
		$(this).siblings("div").removeClass();
		$(this).addClass("selected");
		if($(this).attr("id")=="edes"){
			$("#edestxtarea").show();
			$("#imgtxtarea").hide();
			$("#memotxtarea").hide();
		}else if($(this).attr("id")=="img"){
			$("#edestxtarea").hide();
			$("#imgtxtarea").show();
			$("#memotxtarea").hide();
		}else if($(this).attr("id")=="memo"){
			$("#edestxtarea").hide();
			$("#imgtxtarea").hide();
			$("#memotxtarea").show();
		}
	})
	
	//隐藏.edarea
	$(".save,.cancel").click(function(){
		$(".edarea").fadeOut("slow");
		$("#voDot").fadeOut("slow");
		$("#unDot").fadeOut("slow");
		$("#leDot").fadeOut("slow");
	})
	
	//编辑课程环节鼠标移上去的效果
	$(".link").hover(
		function(){
			$(this).addClass("mouseover");
		},
		function(){
			$(this).removeClass("mouseover");
			$(this).find(".linkdown").slideUp("slow");
		}
	)
	
	//td.down弹出下拉菜单
	$(".downMenu").find("a").click(function(){
		$(this).parent(".link").addClass("mouseover");
		$(this).parents(".mouseover").find(".linkdown").focus();
		$(this).parents(".mouseover").find(".linkdown").slideDown("slow");
		return false;
	})
	
	//linkdown 下拉菜单回收
	$(".linkdown").find("a").click(function(){
		$(this).parents(".linkdown").slideUp("slow");
	})
	$(".linkdown").blur(function(){
		$(this).slideUp("slow");
	})
	
	//A,B,C,D tab切换
	$("#tab").find("div").click(function(){	
		$(this).siblings("div").removeClass("selected");
		$(this).addClass("selected");
		$(".course").hide();
		$(".edit").hide();
		var name=$(this).attr("name");
		$("#"+name).show();
		$("#"+name+"edit").show();
	})
	
	//中英文切换
	$(".cn").click(function(){
		$(".entit").hide();
		$(".cntit").show();
	})
	$(".en").click(function(){
		$(".cntit").hide();
		$(".entit").show();
	})
	
	//.link上移
	$("td.up").find("a").click(function(){
		var upNo=$(this).parents("tr").find("td.sort").text();
		if(parseInt(upNo)>1){
			$(this).parents("tr").find("td.sort").text(parseInt(upNo)-1);
		}
		var upDiv=$(this).parents(".link");
		var preDiv=$(this).parents(".link").prev(".link")
		preDiv.before(upDiv);
		var preNo=preDiv.find("td.sort").text();
		preDiv.find("td.sort").text(parseInt(preNo)+1);
		return false;
	})
	
	//.link 下移
	$("td.down").find("a").click(function(){
		var downNo=$(this).parents(".link").find("td.sort").text();
		if(parseInt(downNo)<9){
			$(this).parents(".link").find("td.sort").text(parseInt(downNo)+1);
		}
		var downDiv=$(this).parents(".link");
		var nextDiv=$(this).parents(".link").next(".link")
		nextDiv.after(downDiv);
		var nextNo=nextDiv.find("td.sort").text();
		nextDiv.find("td.sort").text(parseInt(nextNo)-1);
		return false;
	})
	
	//.link移到最上
	$("li.top").find("a").click(function(){
		var topNo=$(this).parents(".link").find("td.sort").text();
		if(parseInt(topNo)>1){
			$(this).parents(".link").find("td.sort").text(1);
			var topDiv=$(this).parents(".link");
			var firstDiv=$(this).parents("#edit").find(".link:first");
			firstDiv.before(topDiv);
			topDiv.prevAll(".link").each(function(i){
				var preNo=$(this).find("td.sort").text();
				alert(preNo);
			})
		}
		return false;
	})
})