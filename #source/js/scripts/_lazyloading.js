const lazyElements = [
	'img[data-src]',
	'source[data-srcset]',
	'video',
];

const lazyMedia = [...document.querySelectorAll(lazyElements.join(','))]
	.filter((elem) => {
		if (!elem.classList.contains('swiper-lazy')
			&& !elem.closest('.swiper-slide')) {
			return true;
		}
		return false;
	});

const windowHeight = document.documentElement.clientHeight;

let lazyMediaPositions = [];

if (lazyMedia.length > 0) {
	lazyMedia.forEach(media => {
		if (media.dataset.src || media.dataset.srcset || media.children[0].dataset.src) {
			lazyMediaPositions.push(media.getBoundingClientRect().top + scrollY);
			lazyScrollCheck();
		}
	});
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
	if (lazyMedia.length < 0) return;
	lazyScrollCheck();

}

function lazyScrollCheck() {
	let mediaIndex = lazyMediaPositions.findIndex(
		item => scrollY > item - windowHeight
	);

	if (mediaIndex < 0) return;

	switch (lazyMedia[mediaIndex].localName) {
		case 'img':
			if (!(lazyMedia[mediaIndex].srcset === '')) {
				lazyMedia[mediaIndex].srcset = lazyMedia[mediaIndex].dataset.srcset;
				lazyMedia[mediaIndex].removeAttribute('data-srcset');
			}

			lazyMedia[mediaIndex].src = lazyMedia[mediaIndex].dataset.src;
			lazyMedia[mediaIndex].removeAttribute('data-src');

			break;
		case 'source':
			lazyMedia[mediaIndex].srcset = lazyMedia[mediaIndex].dataset.srcset;
			lazyMedia[mediaIndex].removeAttribute('data-srcset');
			break;
		case 'video':

			[...lazyMedia[mediaIndex].children].forEach((item) => {
				item.src = item.dataset.src;
				item.removeAttribute('data-src');
			});

			lazyMedia[mediaIndex].load();
			break;
	}

	if (lazyMedia[mediaIndex].closest('.loading')) {
		lazyMedia[mediaIndex].closest('.loading').classList.remove('loading');
	}

	delete lazyMediaPositions[mediaIndex];
}
