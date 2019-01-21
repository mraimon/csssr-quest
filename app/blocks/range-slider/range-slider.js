import $ from 'jquery';

$.fn.rangeSlider = function () {
	const max = parseInt($('input', this).attr('max'), 10);
	const step = parseInt($('input', this).attr('step'), 10);
	const rulerW = parseInt($('[class*=label]', '[class*=labels]', this).css('background-size'), 10);
	const rangeW = $(this).width();
	const rulerU = (rangeW - rulerW) * (step / max);
	$('[class*=label]', this).each(function () {
		const labelFor = $(this).data('label-for');
		const labelNext = $(this).next().data('label-for');
		const labelNumber = labelFor / step;
		const nextLabelNumber = (labelNext - labelFor) / step;
		const sideValue = rulerU * labelNumber;
		let widthValue = rulerU * nextLabelNumber;
		if (labelNext === max) {
			widthValue = (rangeW - sideValue) / 2;
		}
		if (labelFor === max) {
			widthValue = $(this).prev().outerWidth(true);
		}
		$(this).css('width', (widthValue * 100) / rangeW + '%');
	});
};
