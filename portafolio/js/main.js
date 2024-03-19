$(document).ready(function(){
	/*
	var banner = {
		padre: $('.banner'),
		numeroSlides: $('.banner').children('.slide').length,
		position:1
	};*/

	var info = {
		padre: $('.info'),
		numeroSlides: $('.info').children('.slide').length,
		position: 1
	};

	/*
	banner.padre.children('.slide').first().css({
		'left':0
	});*/

	info.padre.children('.slide').first().css({
		'left':0
	});
/*
	var altoBanner = function() {
	
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.css({
			'height' : alto +'px'
		});	
	}
*/
	var altoInfo = function(){
		var alto = info.padre.children('.active').outerHeight();
		info.padre.animate({
			'height': alto + 'px'
		});
	}

	var altoContenedor = function() {
	
		var altoVentana = $(window).height();
		
		if (altoVentana <= $('.contenedor').outerHeight() + 200)
		{
			$('#contenedor').css({'height': ''});
		}else {
			$('#contenedor').css({'height': altoVentana + 'px'})
		}
	}

	//altoBanner();
	altoContenedor();
	altoInfo();

	$(window).resize(function() {
	//	altoBanner();
		altoContenedor();
	});

	$('#info').children('.slide').each(function() {
		$('#botones').append('<span>');
	});

	$('#botones').children('span').first().addClass('active');

//botones
/*
	$('#banner-next').on('click', function(e) {
		e.preventDefault();

		debugger;
		if(banner.position < banner.numeroSlides) {
			banner.padre.children().not('.active').css({
				'left' : '100%'
			});

			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left' : 0
			});

			$('#banner .active').prev().animate({
				'left' : '-100%'
			});

			banner.position = banner.position + 1;
		}else {
			$('#banner .active').animate({
				'left' : '-100%'
			});

			banner.padre.children().not('.active').css({
				'left' : '100%'
			});

			$('#banner .active').removeClass('active');

			banner.padre.children().first().addClass('active').animate({
				'left' : 0 
			});

			banner.position = 1

		}
	});

	$('#banner-prev').on('click', function(e) {
		e.preventDefault();
		debugger;

		if(banner.position > 1) {
			banner.padre.children().not('.active').css({
				'left' : '-100%'
			});
			
			$('#banner .active').animate({
				'left' : '100%'
			});

			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left' : 0
			});

			banner.position = banner.position - 1;
		}else {
			banner.padre.children().not('.active').css({
				'left' : '-100%'
			});

			$('#banner .active').animate({
				'left' : '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left' : 0
			});
			banner.position = banner.numeroSlides;
		}
	});
*/
	$('#info-next').on('click', function(e) {
		e.preventDefault();

		if(info.position < info.numeroSlides){
			info.padre.children().not('.active').css({
				'left' : '100%'
			});

			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left' : 0
			});

			$('#info .active').prev().animate({
				'left' : '-100%'
			});

			$('#botones').children('.active').removeClass('active').next().addClass('active');
			info.position = info.position + 1;

		}else {
			$('#info .active').animate({
				'left' : '-100%'
			});

			info.padre.children().not('.active').css({
				'left' : '100%'
			});

			$('#info .active').removeClass('active');

			info.padre.children().first().addClass('active').animate({
				'left' : 0
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').first().addClass('active');

			info.position = 1;

		}
		altoInfo();
	});

	$('#info-prev').on('click', function(e) {
		e.preventDefault();
		debugger;
		if(info.position > 1){
			info.padre.children().not('.active').css({
				'left' : '-100%'
			});

			$('#info .active').animate({
				'left' : '100%'
			});

			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left' : 0
			});
		
			$('#botones').children('.active').removeClass('active').prev().addClass('active');

			info.position = info.position - 1;
		}else {
			info.padre.children().not('.active').css({
				'left' : '-100%'
			});

			$('#info .active').animate({
				'left' : '100%'
			});

			$('#info .active').removeClass('active');

			info.padre.children().last().addClass('active').animate({
				'left' : 0
			});

			$('#botones').children('.active').removeClass('active');

			$('#botones').children('span').last().addClass('active');

			info.position = info.numeroSlides;
		}
		altoInfo();
	});
});

document.addEventListener('DOMContentLoaded', () => {
  
	//------ Slider Begin
	  const CaroS = document.querySelector('.Carousel-slider');
	  const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	  const hammer = new Hammer(CaroS);
	  const CaroSTimer = 2000;
	  let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
	  
	//------- Mouseenter Event
	  CaroS.onmouseenter = function(e) {
		  clearInterval(CaroAutoplay); 
		  console.log(e.type + ' mouse detected');
	  }
	
	//----- Mouseleave Event
	  CaroS.onmouseleave = function(e) {
		  clearInterval(CaroAutoplay); 
		  CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		  console.log(e.type + ' mouse detected');
	  }
	
	//----- Mouseclick Event
	  CaroS.onclick = function(e) {
		  clearInterval(CaroAutoplay); 
		  console.log(e.type + ' mouse detected');
	  }
	
	//------ Gesture Tap Event
	  hammer.on('tap', function(e) {
		  clearInterval(CaroAutoplay);
		  console.log(e.type + ' gesture detected');
	  });
	
	//----- Gesture Swipe Event
	  hammer.on('swipe', function(e) {
		  clearInterval(CaroAutoplay); 
		  CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		  console.log(e.type + ' gesture detected');
	  });
  
	let slideLink = document.querySelectorAll('.slider-item');
	if (slideLink && slideLink !== null && slideLink.length > 0){
	  slideLink.forEach( el => el.addEventListener('click', e => {
		e.preventDefault();
		let href = el.dataset.href;
		let target = el.dataset.target;
		if (href !== '#') window.open(href, target);
	  }));
	}
	
	//---- Slider End
	
  });