// JavaScript Document

$(document).ready(function(){
	
	//汉子输入框获得焦点
	$("input#char").focus();
	
	//选中标准按钮
	$(".format").find(".standard").addClass("selected");
	
	//标准、自定义切换
	$(".format").find("a").click(function(){
		var selectName=$(this).siblings(".selected").attr("name");
		$("#"+selectName).hide();
		var name=$(this).attr("name");
		$("#"+name).show();
		$(this).siblings(".selected").removeClass("selected");
		$(this).addClass("selected");
		return false;
	})
	
	//设定默认值
	$(".format").find(".standard").click(function(){
		$("input#print").val("1");
		$("input#grid").val("2");
		$("input#line").val("2");
		$("input#mark").val("3");
		$("input#char").removeAttr("disabled");
		$("input#char").focus();
	})
	
	//改变#line的值预览图效果
	$("input#line").keyup(function(){
		preview();
	})
	
	//改变#mark的值预览图效果
	$("input#mark").keyup(function(){
		preview();
	})
	
	//设定自定义默认状态
	$(".format").find(".DIY").click(function(){
		$("input#line").val("2");
		$("input#mark").val("3");
		$("#DIY").find(".size").find("a:first").next("a").click();
		$("#DIY").find(".or").find("a:first").click();
		$("input#char").removeAttr("disabled");
	})
	
	//设定空白田字格默认状态
	$(".format").find(".blank").click(function(){
		$("#blank").find(".size").find("a:first").next("a").click();
		$("input#char").val("");
		$("input#char").attr("disabled","disabled");
	})
	
	//自定义区、空白田字格区各状态切换
	$("#DIY,#blank").find("a").click(function(){
		$(this).siblings("a").removeClass("selected");
		$(this).addClass("selected");
		return false;
	})
	
	//改变grid的值
	$("#DIY,#blank").find(".size").find("a").click(function(){
		var value=$(this).attr("value");
		if(value=="big"){
			$("input#grid").val("3");
			$("input#line").next("span").text("（最多7行）");
			if($("input#line").val()>7){
				$("input#line").val(7);
			}
		}else if(value=="medium"){
			$("input#grid").val("2");
			$("input#line").next("span").text("（最多9行）");
			if($("input#line").val()>9){
				$("input#line").val(9);
			}
		}else if(value=="small"){
			$("input#grid").val("1");
			$("input#line").next("span").text("（最多10行）");
		}
		preview();
		blankGrid();
	})
	
	//改变write的值
	$("#DIY").find(".or").find("a").click(function(){
		var value=$(this).attr("value");
		if(value=="yes"){
			$("input#print").val("1");
		}else if(value=="no"){
			$("input#print").val("0");
		}
		preview();
	})
			   
})

//自定义预览效果图生成方法
function preview(){
	var size=$("#DIY").find(".size").find(".selected").attr("value");
	var line=$("#DIY").find(".line").val();
	var number=$("#DIY").find(".number").val();
	var or=$("#DIY").find(".or").find(".selected").attr("value");
	var n=0;
	var maxLine=0;
	if(size=="big"){
		n=7;
		maxLine=7;
	}else if(size=="medium"){
		n=9;
		maxLine=9;
	}else if(size=="small"){
		n=11;
		maxLine=10;
	}
	if(line==0||line>maxLine||/[^\d]/.test(line)){
		alert("行数输入不正确，请重新输入！");
		$("#DIY").find(".line").val("");
		$("#DIY").find(".line").focus();
		return false;
	}else if(number==0||number>5||/[^\d]/.test(number)){
		alert("描红次数输入不正确，请重新输入！");
		$("#DIY").find(".number").val("");
		$("#DIY").find(".number").focus();
		return false;
	}
	var viewCon='';
	if(or=="yes"){
		viewCon='<div id="write"></div>';
	}
	for(var i=0;i<line;i++){
		viewCon+='<div id="line">';
		for(var j=0;j<number;j++){
			viewCon+='<div id="'+size+'Mark"></div>';
		}
		for(var k=0;k<n-number;k++){
			viewCon+='<div id="'+size+'"></div>';
		}
		viewCon+='<div class="clear"></div></div>';
	}
	$("#DIY").find("#preview").html("").append(viewCon);
	return false;
}

//空白田字格预览效果图生成方法
function blankGrid(){
	var size=$("#blank").find(".size").find(".selected").attr("value");
	var viewCon='';
	var n=0;
	var maxLine=0;
	if(size=="big"){
		n=7;
		maxLine=7;
	}else if(size=="medium"){
		n=9;
		maxLine=9;
	}else if(size=="small"){
		n=11;
		maxLine=10;
	}
	for(var i=0;i<maxLine;i++){
		viewCon+='<div id="line">';
		for(var k=0;k<n;k++){
			viewCon+='<div id="'+size+'"></div>';
		}
		viewCon+='<div class="clear"></div></div>';
	}
	$("#blank").find("#preview").html("").append(viewCon);
	return false;
};

//输入限制函数
function textLimitCheck(thisArea,maxLength){
	 if (thisArea.value.length > maxLength){
	   alert(maxLength + ' 个字限制. \r超出的将自动去除.');
	   thisArea.value = thisArea.value.substring(0, maxLength);
	   thisArea.focus();
	 }
}

