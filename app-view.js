/**
 * User: Lior
 * Date: 09/03/14
 * Time: 04:45 PM
 */

'use strict';

var $ = require('jquery');
var Underscore = require('underscore');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	initialize: function() {
		console.log('Hello World');
		this.render();
	},

	render: function() {
		$('body').prepend('<h1>Backbone & Browserify</h1>');
	}
});
