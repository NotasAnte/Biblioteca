"use strict";

var LibroRouter = Backbone.Router.extend({
	
	routes	: {
		'libros' : 'init'
	},
	
	controlador	: null,
	facade		: LibroFacade,
	vista		: null,
	collection	: null,
	
	initialize: function() {
    	var me = this;
    	
        me.controlador = me;
        me.collection = new LibroCollection();

        me.vista = new LibroView(me);
        
        //realizamos la llamada para cargar los libros
        me.facade.getLibros(function(result){
			var self = this;
			//reseteamos la coleccion
			self.collection.reset();
			//añadimos a la coleccion
			_.each(result, function(obj){
				self.collection.add(new LibroModel({
					isbn		: obj.isbn,
					titulo		: obj.titulo,
					autor		: obj.autor,
					precio		: obj.precio,
					img			: obj.img,
					editorial	: obj.editorial
				}));
			});
    	}, me);
    },
	
	init : function(){
		var me = this;
		
		if(_.isEmpty(me.vista)){
			View.prototype.showView(me, '#contenido', me.vista);
		} else {
			me.vista.render();
		}
	}
});