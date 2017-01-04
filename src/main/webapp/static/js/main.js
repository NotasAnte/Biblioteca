"use strict";

var Main = Backbone.Router.extend({

	routes  : {},
	routers	: {
		libroRouter		: new LibroRouter(),
	},

	initialize: function() {
    	var me = this;
    	
        // start backbone watching url changes
        Backbone.history.start();
    }
});