<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>



<!-- añadiremos los modulos js -->
<script type="text/javascript" src="static/js/modules/libro/models/LibroModel.js"></script>
<script type="text/javascript" src="static/js/modules/libro/collections/LibroCollection.js"></script>
<script type="text/javascript" src="static/js/modules/libro/helpers/LibroHelper.js"></script>
<script type="text/javascript" src="static/js/modules/libro/views/LibroView.js"></script>
<script type="text/javascript" src="static/js/modules/libro/LibroFacade.js"></script>
<script type="text/javascript" src="static/js/modules/libro/LibroRouter.js"></script>


<script type="text/javascript" src="static/js/utils.js"></script>
<script type="text/javascript" src="static/js/main.js"></script>

<script type="text/javascript">

	window.onload = function() {
		var app = new Main();
	};

</script>