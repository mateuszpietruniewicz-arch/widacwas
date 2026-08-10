(function () {
	function animateCounter(el) {
		var target = parseFloat(el.getAttribute('data-target'));
		var suffix = el.getAttribute('data-suffix') || '';
		var duration = 1200;
		var startTime = null;

		function step(timestamp) {
			if (!startTime) startTime = timestamp;
			var progress = Math.min((timestamp - startTime) / duration, 1);
			var value = (target * progress).toFixed(1).replace('.', ',');
			el.textContent = value + suffix;
			if (progress < 1) requestAnimationFrame(step);
			else el.textContent = target.toFixed(1).replace('.', ',') + suffix;
		}
		requestAnimationFrame(step);
	}

	document.addEventListener('DOMContentLoaded', function () {
		var counters = document.querySelectorAll('.counter');
		if (!counters.length) return;

		// Znacznik HTML ma już poprawną, statyczną wartość (np. "32,5%") —
		// to jest treść dla użytkowników bez JS i bez IntersectionObserver.
		// Animujemy tylko wtedy, gdy realnie możemy: reszta zostaje bez zmian.
		if (!('IntersectionObserver' in window)) return;
		if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		var obs = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.textContent = '0' + (entry.target.getAttribute('data-suffix') || '');
					animateCounter(entry.target);
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.5 });
		counters.forEach(function (el) { obs.observe(el); });
	});
})();
