$(document).ready(function(e) {
		var myScroll1 = new IScroll ( '#wzh_nianlin_fenbu_1', { scrollbars: true, mouseWheel: true, interactiveScrollbars: true});
    $("#wzh_header b" ).on('click',function(){
		$( "#wzh_box1" ).hide("slow");
		$("#wzh_box2" ).show("slow");	
	});
	
	$("#wzh_header1 b" ).on('click',function(){
		$( "#wzh_box2" ).hide("slow");
		$("#wzh_box1" ).show("slow");	
	});
	
	$("#wzh_nianling").on("click",function(){
		$("#wzh_nianlin_fenbu").show();
		$("#wzh_nianlin_fenbu_2").hide();
		$( "#wzh_body" ).hide( "slow" );
	});
	
	$("#wzh_xingbie").on("click",function(){
		$( "#wzh_nianlin_fenbu" ).hide( "slow" );
		$( "#wzh_body" ).hide( "slow" );
		$("#wzh_nianlin_fenbu_2").show();
	});
	
	
	$("#wzh_tijiao").on("click",function(){
		var area=$('#wzhwzh').val();
		if( $("#wzhwzh").val() == "" ){
			$( "#wzh_tijiaoxingshi" ).css({"display":"block"}).fadeOut(3000);	
		}else{
			$( "#wzh_box1" ).hide("slow");
			$( "#wzh_nianlin_fenbu" ).hide( "slow" );
			$( "#wzh_nianlin_fenbu2" ).hide( "slow" );
			$( "#wzh_box2" ).show("slow");
			$( "#wzh_box2_wenben" ).find( 'p' ).append(area);	
		}
	});
	
});


$( function(){
	$("#wzh_nianlin_fenbu li").on("click",function(){
		$(this).addClass('hover').siblings().removeClass('hover');	
	    $(this).find('b').addClass('hover');
		$(this).siblings().find('b').removeClass('hover');	
		var con=$(this).find('span').text();
		$('#wzh_nianling').find('h3').html(con);
		$('#wzh_body').show();
	});
	
	$("#wzh_nianlin_fenbu2 li").on("click",function(){
		$(this).addClass('hover').siblings().removeClass('hover');	
	    $(this).find('b').addClass('hover');
		$(this).siblings().find('b').removeClass('hover');	
		var con=$(this).find('span').text();
		$('#wzh_xingbie').find('h3').html(con);
		$('#wzh_body').show();
	});
})