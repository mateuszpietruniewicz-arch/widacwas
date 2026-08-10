(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var els = document.querySelectorAll('.reveal');
		if (!('IntersectionObserver' in window) || !els.length) {
			els.forEach(function (el) { el.classList.add('is-visible'); });
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
	});
})();
