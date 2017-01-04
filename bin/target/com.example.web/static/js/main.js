"use strict";

var Main = Backbone.Router.extend({

	routes  : {},
	routers	: {},

	initialize: function() {
    	var me = this;
    	
        // start backbone watching url changes
        Backbone.history.start();
    }
});