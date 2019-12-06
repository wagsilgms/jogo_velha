var vez = 'o';
var o = '<img src="assets/images/o.jpg" border="0" height="90">';
var x = '<img src="assets/images/x.jpg" border="0" height="90">';

function atualizarPlacar() {
	if (vez == 'o') {
		$('.jogador img').attr('src', 'assets/images/o.jpg');
	} else {
		$('.jogador img').attr('src', 'assets/images/x.jpg');
	}
}

function verificarGanhador() {

	var a1 = $('.a1').attr('marcado');
	var a2 = $('.a2').attr('marcado');
	var a3 = $('.a3').attr('marcado');

	var b1 = $('.b1').attr('marcado');
	var b2 = $('.b2').attr('marcado');
	var b3 = $('.b3').attr('marcado');

	var c1 = $('.c1').attr('marcado');
	var c2 = $('.c2').attr('marcado');
	var c3 = $('.c3').attr('marcado');

var ganhador = '';

	for ( var i = 0; i <= 1; i++ ) {
		if (i == 0) {
		var op = 'o';
	} else {
		var op = 'x';
	}

	if (a1 == op && b1 == op && c1 == op) {
			ganhador = op;
		} 
		else if (a2 == op && b2 == op && c2 == op) {
			ganhador = op;
		} 
		else if (a3 == op && b3 == op && c3 == op) {
			ganhador = op;
		}
		else if (a1 == op && a2 == op && a3 == op) {
			ganhador = op;
		}
		else if (b1 == op && b2 == op && b3 == op) {
			ganhador = op;
		}
		else if (c1 == op && c2 == op && c3 == op) {
			ganhador = op;
		} 
		else if (a1 == op && b2 == op && c3 == op) {
			ganhador = op;
		} 
		else if (c1 == op && b2 == op && a3 == op) {
			ganhador = op;
		}
	}

		if (ganhador != '') {
			if (ganhador == 'o') {
				$('.final_1, .reiniciar, .mascara').fadeIn('fast');
		} else {
				$('.final_2, .reiniciar, .mascara').fadeIn('fast');
		}
	}

	else if (a1 != '' && b1 != '' && c1 != '' && a2 != '' && b2 != '' && c2 != '' && a3 != '' && b3 != '' && c3 != '') {

		$('.final_3, .reiniciar, .mascara').fadeIn('fast');
	}
}

$(function(){

		atualizarPlacar();

		$('.area').bind('click', function(){

		if ( $(this).find('img').length == 0 ) {

			if (vez == 'o') {
				$(this).html(o).attr('marcado','o');
				vez = 'x';
			} else {
				$(this).html(x).attr('marcado','x');
				vez = 'o';
			}

			atualizarPlacar();
			verificarGanhador();
		}

	});

	$('.reiniciar').bind('click', function(){
		$('.area').html('').attr('marcado', '');
		$('.final_1, .final_2, .final_3, .reiniciar, .mascara').fadeOut('fast');
	});

});