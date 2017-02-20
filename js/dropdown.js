	
$(".ion-navicon-round").click(function(){
	var valorDropdown=$(this).attr("id");
	

	console.log(valorDropdown);
	if(valorDropdown=="0"){
	$(".dropdown2").css("display","block");
	$(".ion-navicon-round").attr("id","1");						
	}
	else{
	$(".dropdown2").css("display","none");
	$(".ion-navicon-round").attr("id","0");		
	}
});