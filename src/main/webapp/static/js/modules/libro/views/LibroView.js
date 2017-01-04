"use strict";

var LibroView = Backbone.View.extend({
	
	tag				: 'VistaLibro',
	el				: $('#contenido'),
	templateUrl		: CONTEXT_PATH + '/static/js/modules/libro/templates/',
	
	template	: null,
	controlador	: null,
	
	events		: {
		"click #formLibro #guardar" 	: "onClickGuardarModificar",
		"click #formLibro #cancelar"	: "onClickCancelar",
		"click #formLibro #eliminar" 	: "onClickEliminar",
		"click #tablaLibros tbody tr"	: "onClickTabla",
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
		//inicializamos la tabla de libros
		me.initializeTableLibros();
	},
	
	getTemplateUrl : function() {
		return this.templateUrl;
	},
	
	initializeTableLibros : function(){
		var me = this;
		
		//tabla Libros
		$('#tablaLibros').dataTable({
			"aaData"	: me.controlador.collection.toJSON(),
	        "aoColumns": [{ "sTitle": "ISBN", "mData": "isbn", "bSortable":true, "sClass" : "vertical" },
	                      { "sTitle": "Titulo", "mData": "titulo", "bSortable":true, "sClass" : "vertical" },
	                      { "sTitle": "Autor", "mData": "autor", "bSortable":true, "sClass" : "vertical" },
	                      { "sTitle": "Editorial", "mData": "editorial", "bSortable":true, "sClass" : "vertical" },
	                      { "sTitle": "Precio", "mData": "precio", "bSortable":true, "sClass" : "vertical" },
	                      { "sTitle": "Imagen", "mData": "img", "render": function ( data, type, full, meta ) {
	                    	  	return '<img src="'+ data +'"  style="width: 90px; height: 120px;">'; }, "bSortable":false, "sClass" : "paddingImg"
	                      }],
			"bLengthChange" : false,
			"bInfo"			: false,    
			"searching"		: false,
			"paging"		: true,
			"initComplete"	: function( settings, json ) { },
			"createdRow"	: function( row, data, dataIndex ) { $(row).data('obj', data); }
		});
	},
	
	onClickTabla : function(event){
		var me = this;
		var table = $('#tablaLibros').dataTable();
		//si realizamos el click en el mismo tr se elimina la selección
		if ( $(event.currentTarget).hasClass('selected') ) {
            me.onClickCancelar(event);
        } else {
        	//si el tr no esta seleccionado, se selecciona y pasa al formulario
            table.$('tr.selected').removeClass('selected');
            $(event.currentTarget).addClass('selected');
            me._selectTabLibro($(event.currentTarget).data('obj'));
        }
	},
	
	_selectTabLibro : function(libroObj){
		var me = this;
		//buscamos el modelo en la colleccion
		var libroModel = me.controlador.collection.findWhere({isbn : libroObj.isbn});
		//El botón guardar pasa a modificar
		$('#formLibro #guardar').text('Modificar');
		//mostramos el boton eliminar
		var btnEliminar = $('#formLibro #eliminar');
		btnEliminar.hasClass('hidden') ? btnEliminar.removeClass('hidden') : null;
		//seteo de atributos al formulario
		$('#isbn').val(libroModel.get('isbn'));
		$('#titulo').val(libroModel.get('titulo'));
		$('#autor').val(libroModel.get('autor'));
		$('#precio').val(libroModel.get('precio'));
		$('#editorial').val(libroModel.get('editorial'));
		$('#imagen').val(libroModel.get('img'));
	},
	
	onClickCancelar : function(event){
		//el botón pasa a guardar
		$('#formLibro #guardar').text('Guardar');
		//ocultamos el boton eliminar
		var btnEliminar = $('#formLibro #eliminar');
		btnEliminar.hasClass('hidden') ? null : btnEliminar.addClass('hidden');
		//se resetean los campos
		$('#isbn, #titulo, #autor, #precio, #editorial, #imagen').val('');
		//se elimina la clase selected de la tabla
		var table = $('#tablaLibros').dataTable();
		table.$('tr.selected').removeClass('selected');
	},
	
	onClickEliminar : function(event){
		var me = this;
		//obtenemos la tabla
		var table = $('#tablaLibros').DataTable();
		//obtenemos el modelo seleccionado de la tabla y buscamos en el collection el modelo backbone.
		var libroObj = table.$('tr.selected').data('obj');
		//buscamos el modelo en la colleccion
		var libroModel = me.controlador.collection.findWhere({isbn : libroObj.isbn});
		//si el modelo esta completo
		if(libroModel.isValid()){
			//realizamos la llamada al servicio para su inserccion
			me.controlador.facade.deleteLibro(libroObj.isbn, function(result){
				//si el resultado ha sido correcto
				if(_.isBoolean(result) && result){
					//eliminamos la fila de la tabla
					table.row(table.$('tr.selected')).remove().draw();
					//eliminamos al collection el modelo backbone nuevo
					me.controlador.collection.remove(libroModel);
					//ejecutamos el metodo de reseteo del formulario
					me.onClickCancelar();
				}
			},me);
			
		}else{
		//si el modelo no cumple con las validaciones
		// TODO autor alberto antequera validacion del formulario crearemos un helper para sobrear los campos del formulario.
		}
	},
	
	onClickGuardarModificar : function(event){
		var me = this;
		//obtenemos la tabla
		var table = $('#tablaLibros').DataTable();
		//nos creamos el modelo
		var libroModel = new LibroModel({
			isbn	 	: $('#isbn').val(),
			titulo		: $('#titulo').val(),
			autor		: $('#autor').val(),
			precio		: $('#precio').val(),
			editorial	: $('#editorial').val(),
			img			: $('#imagen').val()
		});
		//si el modelo esta completo
		if(libroModel.isValid()){
			//verificamos si el metodo es guardar o modificar en caso de que tengamos una tienda seleccionada modificamos
			if(_.isEmpty(table.$('tr.selected').data('obj'))){
					//realizamos la llamada al servicio para su inserccion
					me.controlador.facade.setLibro(libroModel.toJSON(), function(result){
						//añadimos a la tabla el modelo insertado
						table.row.add(libroModel.toJSON()).draw(true);
						//añadimos al collection el modelo backbone nuevo
						me.controlador.collection.add(libroModel);
						//ejecutamos el metodo de reseteo del formulario
						me.onClickCancelar();
					},me);
			}else{
				//obtenemos la tienda seleccionada
				var libroObj = table.$('tr.selected').data('obj');
				//buscamos el modelo en la colleccion
				libroModel = me.controlador.collection.findWhere({isbn : libroObj.isbn});
				
				libroModel.set('titulo', $('#titulo').val());
				libroModel.set('autor', $('#autor').val());
				libroModel.set('precio', $('#precio').val());
				libroModel.set('editorial', $('#editorial').val());
				libroModel.set('img', $('#imagen').val());
				
				//realizamos la llamada al servicio para su inserccion
				me.controlador.facade.updateLibro(libroModel.toJSON(), function(result){
					if(!_.isEmpty(result)){
						//modificamos la tabla el modelo insertado
						table.row(table.$('tr.selected')).data(libroModel.toJSON()).draw();
						//modifiamos el collection el modelo backbone modificado
						me.controlador.collection.set(libroModel, {remove: false});
						//ejecutamos el metodo de reseteo del formulario
						me.onClickCancelar();
					}
				},me);
			}
		}else{
			//si el modelo no cumple con las validaciones
			// TODO autor alberto antequera validacion del formulario crearemos un helper para sobrear los campos del formulario.
		}
	}
});