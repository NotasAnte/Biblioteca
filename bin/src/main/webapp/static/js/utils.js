"use strict";


var Application = function(options) {
	this.initialize.apply(this, arguments);
};
_.extend(Application.prototype, Backbone.Events);

var TemplateManager = function() {
};

_.extend(TemplateManager.prototype, {

		templates : {},

		_loadTemplate : function(templateName, url) {

			url = url + templateName;
			$.ajax({
				context : this,
				async : false,
				type : 'GET',
				url : url,
				cache : true,
				success : function(result) {

					var textContent = null;

					if (result.documentElement.textContent) {
						textContent = result.documentElement.textContent;
					} else {
						textContent = result.documentElement.text;
					}

					this.templates[templateName] = textContent;
				},

				error : function() {
					alert("Error cargando template");
				},
				dataType : 'xml'
			});

		},

		// Carga un template
		getTemplate : function(templateName, url) {

			if (!this.templates[templateName]) {
				this._loadTemplate(templateName, url);
			}

			return this.templates[templateName];
		},

		// Tell this object to stop listening to either specific events ... or
		// to every object it's currently listening to.
		stopListening : function(obj, name, callback) {
			var listeners = this._listeners;
			if (!listeners) {
				return;
			}
			if (obj) {
				obj.off(name, typeof name === 'object' ? this : callback, this);
				if (!name && !callback) {
					delete listeners[obj._listenerId];
				}
			} else {
				if (typeof name === 'object') {
					callback = this;
				}
				for ( var id in listeners) {
					listeners[id].off(name, callback, this);
				}
				this._listeners = {};
			}
			return this;
		}

});


var View = function() {
};

_.extend(View.prototype, {

	close : function (me) {
	    console.log('Cerrando vista ' + me.tag);
	    if (me.beforeClose) me.beforeClose(me);
	    me.$el.empty();
	    me.stopListening();
	    me.unbind();
	    me.undelegateEvents();
	    me.off();
	},

	showView: function(me, selector, viewOpen) {
		//cerramos si tenemos view
	    if (me.vista) this.close(me.vista);
	    //asignamos la view abierta
	    me.vista = viewOpen.render();
	    //retornamos la view abierta
	    return viewOpen;
	}
	

});