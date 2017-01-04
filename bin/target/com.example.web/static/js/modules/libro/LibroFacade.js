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
				async		: false,
				context		: me
			}).done(succesCallback);
		}
};