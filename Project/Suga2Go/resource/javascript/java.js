var mainShow = document.querySelectorAll
('[data-component="mainSlideshow"]');

mainShow.forEach(initSlideShow);

function initSlideShow(mainSlideshow) {
	var slides = document.querySelectorAll
	(`#${mainSlide.id} [role="list"] .mainSlides`);

	var index = 0, time = 6000;
	slides[index].classList.add('active');
	setInterval( () => {
		slides[index].classList.remove('active');

		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
	}
