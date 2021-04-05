var mainShow = document.querySelectorAll
('[data-component="mainSlideshow"]');

mainShow.forEach(initMainSlideShow);

function initMainSlideShow(mainSlideshow) {
	var slides = document.querySelectorAll
	(`#${mainSlide.id} [role="list"] .mainSlides`);

	var index = 0, time = 11000;
	slides[index].classList.add('active');
	setInterval( () => {
		slides[index].classList.remove('active');

		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
	}

var medShow = document.querySelectorAll
('[data-component="medSlideshow"]');

medShow.forEach(initMedSlideShow);

function initMedSlideShow(medSlideshow) {
	var slides = document.querySelectorAll
	(`#${medPic.id} [role="list"] .medSlides`);

	var index = 0, time = 13000;
	slides[index].classList.add('active');
	setInterval( () => {
		slides[index].classList.remove('active');

		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}
