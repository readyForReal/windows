document.addEventListener('DOMContentLoaded', () => {

	'use strict';

	let	modal = require('./parts/modal.js'),
		tabs = require('./parts/tabs.js'),
		timer = require('./parts/timer.js'),
		gallery = require('./parts/gallery.js'),
		form = require('./parts/form.js'),
		calc = require('./parts/calc.js');

	modal();
	tabs();
	timer();
	gallery();
	form();
	calc();

});