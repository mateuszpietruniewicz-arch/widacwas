(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var els = document.querySelectorAll('.reveal');
		if (!els.length) return;

		function revealAll() {
			els.forEach(function (el) { el.classList.add('is-visible'); });
		}

		if (!('IntersectionObserver' in window)) {
			revealAll();
			return;
		}

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
		els.forEach(function (el) { observer.observe(el); });

		// Zabezpieczenie: treść nie może zostać trwale schowana, nawet jeśli
		// obserwator z jakiegokolwiek powodu nie odpali się dla któregoś
		// elementu (np. niestandardowe zachowanie w danym środowisku/przeglądarce).
		window.setTimeout(function () {
			observer.disconnect();
			revealAll();
		}, 2000);
	});
})();
