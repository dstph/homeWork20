let carColor;
$.getJSON( "https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json", function( data ) {
  	carColor = data;
});


$('.inputs').click(function(){
	if ($('.solid-black').is(':checked')){
		$('.car').attr('src',carColor['solid-black']);
		$('.colorName').html("Solid Black")
	} else if($('.midnight-silver').is(':checked')){
		$('.car').attr('src',carColor['midnight-silver']);
		$('.colorName').html("Midnight Silver")
	} else if($('.obsidian-black').is(':checked')){
		$('.car').attr('src',carColor['obsidian-black']);
		$('.colorName').html("Obsidian Black")
	} else if($('.deep-blue').is(':checked')){
		$('.car').attr('src',carColor['deep-blue']);
		$('.colorName').html("Deep Blue")
	} else if($('.silver').is(':checked')){
		$('.car').attr('src',carColor['silver']);
		$('.colorName').html("Silver")
	} else if($('.white').is(':checked')){
		$('.car').attr('src',carColor['white']);
		$('.colorName').html("White")
	} else if($('.red').is(':checked')){
		$('.car').attr('src',carColor['red']);
		$('.colorName').html("Red")
	} else if($('.red').is(':checked')){
		$('.car').attr('src',carColor['red']);
		$('.colorName').html("Red")
	} else if($('.orange').is(':checked')){
		$('.car').attr('src',carColor['orange']);
		$('.colorName').html("Orange")
	} else if($('.yellow').is(':checked')){
		$('.car').attr('src',carColor['yellow']);
		$('.colorName').html("Yellow")
	} else if($('.glacier-blue').is(':checked')){
		$('.car').attr('src',carColor['glacier-blue']);
		$('.colorName').html("Glacier Blue")
	} else if($('.electric-blue').is(':checked')){
		$('.car').attr('src',carColor['electric-blue']);
		$('.colorName').html("Electric Blue")
	} else if($('.green-lotus').is(':checked')){
		$('.car').attr('src',carColor['green-lotus']);
		$('.colorName').html("Green Lotus")
	}
});  




