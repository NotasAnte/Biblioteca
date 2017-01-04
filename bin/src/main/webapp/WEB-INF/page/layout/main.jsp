<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="author" content="Alberto Antequera" />
	<meta name="company" content="N/A" />
	
	<!-- Icono APP -->
	<link rel="icon" type="image/png" href="static/img/ico.jpg" />
	
	<%--titulo app--%>
	<title><tiles:insertAttribute name="title" ignore="true" />${requestScope.title} </title>

	<%-- Estilos --%>
	<tiles:insertAttribute name="css" />
	
</head>
<body>

	<div class="container-fluid">
		<%--marco_cabecera--%>
		<div id="header" class="row">
			<tiles:insertAttribute name="header" />
		</div>
	
		<%--marco_contenido--%>
		<div id="contenido">
			<tiles:insertAttribute name="contenido" />
		</div>
		
		<%--marco_pie--%>
		<div id="footer" class="row">
			<tiles:insertAttribute name="footer" />
		</div>
		
	</div>
	
	<%-- librerias javascript --%>
	<tiles:insertAttribute name="jsLib" />
	
	<%-- Modulos js (Backbone)--%>
	<tiles:insertAttribute name="jsModules" />
</body>
</html>