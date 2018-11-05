import _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {

	'use strict';

	let	modal = require('./parts/modal.js'),
		tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js'),
    gallery = require('./parts/gallery.js');

	modal();
	tabs();
	timer();
	gallery();

});