(function () {
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('a.obf-tel[data-tel]').forEach(function (el) {
			var raw = el.getAttribute('data-tel').split('').reverse().join('');
			var national = raw.replace(/^\+48/, '');
			var formatted = national.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
			el.setAttribute('href', 'tel:' + raw);
			el.textContent = formatted;
		});
	});
})();
