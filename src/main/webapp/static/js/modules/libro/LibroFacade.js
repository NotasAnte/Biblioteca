"use strict";

var LibroFacade = {
		//llamada para obtener los libros del repositorio
		getLibros : function(succesCallback, me) {
			$.ajax({
				type 		: "GET",
				url 		: "api/getLibros",
				dataType 	: "json",
				async		: false,
				context		: me
			}).done(succesCallback);
		},
		// insert de libro
		setLibro : function(data, succesCallback, me) {
			$.ajax({
				type 		: "POST",
				data		: JSON.stringify(data),
				url 		: "api/setLibro",
				dataType 	: "json",
				contentType	: "application/json",
				async		: false,
				context		: me
			}).done(succesCallback);
		},
		
		deleteLibro : function(id, succesCallback, controlador) {
			$.ajax({
				type 		: "POST",
				data		: JSON.stringify(id),
				url 		: "api/deleteLibro",
				dataType 	: "json",
				contentType	: "application/json",
				async		: false,
				context		: controlador
			}).done(succesCallback);
		},
		
		updateLibro : function(libro, succesCallback, controlador) {
			$.ajax({
				type 		: "POST",
				data		: JSON.stringify(libro),
				url 		: "api/updateLibro",
				dataType 	: "json",
				contentType	: "application/json",
				async		: false,
				context		: controlador
			}).done(succesCallback);
		}
};