"use strict";

var LibroView = Backbone.View.extend({
	
	tag				: 'VistaLibro',
	el				: $('#contenido'),
	templateUrl		: CONTEXT_PATH + '/static/js/modules/libro/templates/',
	
	template	: null,
	controlador	: null,
	
	events		: {
		
	},
	
	initialize	: function(opts){
		var me = this;
		
		me.controlador = opts.controlador;
		me.template = Handlebars.compile(TemplateManager.prototype.getTemplate('LibroView.tmpl', me.getTemplateUrl()));
	},
	
	render : function(){
		var me = this;
		//renderizamos la template
		me.$el.html(me.template());
	},
	
	getTemplateUrl : function() {
		return this.templateUrl;
	}
	
	
	
	
});