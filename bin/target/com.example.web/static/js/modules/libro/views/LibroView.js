"use strict";

var LibroView = Backbone.View.extend({
	
	tag			: 'VistaLibro',
	el			: $('#contenido'),
	
//	template	: 
	
	controlador	: null,
	
	events		: {
		
	},
	
	inicialize	: function(controlador){
		var me = this;
		
		me.controlador = controlador;
	},
	
	render : function(){
		var me = this;
		
		me.$el.html(Handelbars.compile())
	}
	
	
	
	
});