import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/range-slider/range-slider';

$(() => {
	$('.range-slider').rangeSlider();
	svg4everybody();
});
