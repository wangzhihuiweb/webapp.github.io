Zepto(function(){
	Shangpin()
	
	
	$(".div div .a").on('hover',function(){
		$( this ).parent().find(".b").show("slow");
		$( this ).parent().siblings().find(".b").hide("slow");
	})
	
	$("#yqlj").toggle(
	  function () {
		$(".MenuBar .ul").slideDown();
	  },
	  function () {
		$(".MenuBar .ul").slideUp();
	  }
	);
	
	$(".light1").on("click",function(){
		$( this ).addClass("light");
		$( this ).addClass("hover");
		$(".light2").removeClass("light");
		$(".light2").removeClass("hover");
		$(".light3").removeClass("light");
		$(".light3").removeClass("hover");
		$(".light4").removeClass("light");
		$(".light4").removeClass("hover");
		$(".light5").removeClass("light");
		$(".light5").removeClass("hover");
		$("#box_yunma").css("display","block");
		$("#box_dingdan").css("display","none");
		$("#box_shouye").css("display","none");
		$("#box_gerenzhongxin").css("display","none");
		$("#box_gouwuche").css("display","none");
	});	
	
	$(".light2").on("click",function(){
		$( this ).addClass("light");
		$( this ).addClass("hover");
		$(".light1").removeClass("light");
		$(".light1").removeClass("hover");
		$(".light3").removeClass("light");
		$(".light3").removeClass("hover");
		$(".light4").removeClass("light");
		$(".light4").removeClass("hover");
		$(".light5").removeClass("light");
		$(".light5").removeClass("hover");
		$("#box_yunma").css("display","none");
		$("#box_dingdan").css("display","block");
		$("#box_shouye").css("display","none");
		$("#box_gerenzhongxin").css("display","none");
		$("#box_gouwuche").css("display","none");
			
	});	
	
	$(".light3").on("click",function(){
		$( this ).addClass("light");
		$( this ).addClass("hover");
		$(".light2").removeClass("light");
		$(".light2").removeClass("hover");
		$(".light1").removeClass("light");
		$(".light1").removeClass("hover");
		$(".light4").removeClass("light");
		$(".light4").removeClass("hover");
		$(".light5").removeClass("light");
		$(".light5").removeClass("hover");
		$("#box_yunma").css("display","none");
		$("#box_dingdan").css("display","none");
		$("#box_shouye").css("display","block");
		$("#box_gerenzhongxin").css("display","none");
		$("#box_gouwuche").css("display","none");
	
	});	
	
	$(".light4").on("click",function(){
		$( this ).addClass("light");
		$( this ).addClass("hover");
		$(".light2").removeClass("light");
		$(".light2").removeClass("hover");
		$(".light3").removeClass("light");
		$(".light3").removeClass("hover");
		$(".light1").removeClass("light");
		$(".light1").removeClass("hover");
		$(".light5").removeClass("light");
		$(".light5").removeClass("hover");
		$("#box_yunma").css("display","none");
		$("#box_dingdan").css("display","none");
		$("#box_shouye").css("display","none");
		$("#box_gerenzhongxin").css("display","block");
		$("#box_gouwuche").css("display","none");
	});	
	
	$(".light5").on("click",function(){
		$( this ).addClass("light");
		$( this ).addClass("hover");
		$(".light2").removeClass("light");
		$(".light2").removeClass("hover");
		$(".light3").removeClass("light");
		$(".light3").removeClass("hover");
		$(".light4").removeClass("light");
		$(".light4").removeClass("hover");
		$(".light1").removeClass("light");
		$(".light1").removeClass("hover");
		$("#box_yunma").css("display","none");
		$("#box_dingdan").css("display","none");
		$("#box_shouye").css("display","none");
		$("#box_gerenzhongxin").css("display","none");
		$("#box_gouwuche").css("display","block");
	});
	
   $("header ul .img1").toggle(
	  function () {
		$( "#wrap" ).animate( {"margin-left": "50%" },"slow");
		$(".MenuBar").animate({"left":"0"},"slow")	
	  },
	  function () {
		$( "#wrap" ).animate( {"margin-left": "0%" },"slow");
		$(".MenuBar").animate({"left":"-50%"},"slow")		
	  }
	);


	
	
	$("#Aa").click(function () {
		
        if (Submit()) {
			Bgg();
        }
				
    })
	
	$("#Name").blur(function () {
       Name();
    });
	
	$("#Pw").blur(function () {
       Pw();
    });
		
})


function Submit() {
    var rs1 = Name();
	var rs2 = Pw();
    if (rs1 && rs2) {
        return true;
    }
    else {
        return false;
    }
}

//姓名确认
	function Name() {
		var val = $("#Name").val();
		if (val == "" || val !== "wangzhihui") {
			$(".I1").css("color","#900").text("账号有误");
			return false;
		} else if(val == "wangzhihui"){
			$(".I1").css("color", "#6B6B6B").text("正确");
			return true;
		}
		
	}
	
function Pw() {
		var val = $("#Pw").val();
		if (val == "" || val !== "mima123") {
			$(".I2").css("color","#900").text("密码错误");
			return false;
		} else if(val == "mima123"){
			$(".I2").css("color", "#6B6B6B").text("正确");
			return true;
		}		
}


function Bgg(){
	$(".bg" ).hide("slow")
}




//商品1
function Shangpin(){
	//加
	
	/*var index = 1;*/
	$(".Add").on("click",function(){
		var text=$(this).parent().find("input").val();
		text++;
		$(this).parent().find("input").val(text);
		
	})
	
	//减
	$(".Cut").on("click",function(){
		var text=$(this).parent().find("input").val();
		$(this).each(function(){
			if(text>1){
				text--;
			}
			$(this).parent().find("input").val(text);
		})
		
	}) 
}













	
