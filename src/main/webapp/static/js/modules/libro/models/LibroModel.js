"use strict";

var LibroModel = Backbone.Model.extend({
	//define el id de backbone
	idAttribute 	: 'isbn',
	//atributos por defecto
	defaults		: {
		'isbn'		: null,
		'titulo'	: 'titulo defecto',
		'autor'		: null,
		'precio'	: null,
		'img'		: null,
		'editorial'	: null,
	},
	//sobrescribe fucnion backbone
	validate 		: function(attrs, options){
		if (_.isEmpty(attrs.isbn) 
				|| _.isEmpty(attrs.titulo) 
				|| _.isEmpty(attrs.autor) 
				|| _.isEmpty(attrs.precio)) {
	    	return true;
	    }else{
	    	return false;
	    }
	}
});