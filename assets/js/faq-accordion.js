(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var items = document.querySelectorAll('.faq-item');
		if (!items.length) return;

		items.forEach(function (item) {
			var btn = item.querySelector('.faq-question');
			var answer = item.querySelector('.faq-answer');
			if (!btn || !answer) return;

			answer.style.maxHeight = item.classList.contains('is-open')
				? answer.scrollHeight + 'px'
				: '0px';

			btn.addEventListener('click', function () {
				var isOpen = item.classList.contains('is-open');
				if (isOpen) {
					item.classList.remove('is-open');
					btn.setAttribute('aria-expanded', 'false');
					answer.style.maxHeight = '0px';
				} else {
					item.classList.add('is-open');
					btn.setAttribute('aria-expanded', 'true');
					answer.style.maxHeight = answer.scrollHeight + 'px';
				}
			});
		});

		window.addEventListener('resize', function () {
			document.querySelectorAll('.faq-item.is-open .faq-answer').forEach(function (answer) {
				answer.style.maxHeight = answer.scrollHeight + 'px';
			});
		});
	});
})();
