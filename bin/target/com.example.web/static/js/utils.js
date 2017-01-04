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