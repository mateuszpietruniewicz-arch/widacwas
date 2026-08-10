(function () {
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('.compare-range').forEach(function (range) {
			var slider = range.closest('.compare-slider');
			var after = slider.querySelector('.compare-after');
			var base = slider.querySelector('.compare-base');
			var baseWidth = base.offsetWidth;
			range.addEventListener('input', function () {
				after.style.width = range.value + '%';
				after.querySelector('img').style.width = baseWidth + 'px';
			});
		});
	});
})();
