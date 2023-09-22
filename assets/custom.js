$(document).ready(function () {
	//Change text color and state color when a state is hovered over
	$(".text").hover(function () {
		var path=$(this).siblings();
		path.addClass("hovered");
		$(this).addClass("hovered2");
	}, function () {
		var path=$(this).siblings()
		path.removeClass("hovered");
		$(this).removeClass("hovered2");
	});
	$(".state").hover(function () {
		var text = $(this).siblings();
		text.addClass("hovered2");
	}, function () {
		var text= $(this).siblings();
		text.removeClass("hovered2");
	});
	//Change displayed state menu
	$("select.layer#no-layer").css({"display":"block"});
	$('select#layer-choice').change(function () {
		var layer=$(this).val();
		$(".layer").css({"display":"none"});
		$("select.layer#"+layer.replace(/\s/g, '')).css({"display":"block"});
		$(".layer."+layer.replace(/\s/g, '')).css({"display":"block"});
		
		});

	//Prevent modal from opening when pressing arrow keys
	exit="false";
	$("select.layer").keydown(function(e){
		var key=e.which;
		if (key==40 || key==39 || key==38 || key==37){
		exit="true";
		}
		if (key==13){
		//if(key!=40 || key!=39 || key!=38 || key!=37){
		exit="false";
		}
	})
	//Select menu modal activation
	$('select.layer').change(function () {
		var state = $(this).val();	
		if (exit=="false"){
		$("#m"+state).modal('show');
		//deselect state so same state can be chosen again
		$('select.layer').prop('selectedIndex',0); 
		}
	});	
	
	$('.modal').on('hidden.bs.modal', function() {
		var layer = '#'+$('#layer-choice').val().replace(/ /g, '');
		$(layer).focus();
	});
});
