package com.biblioteca.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.biblioteca.dto.LibroDTO;

/**
 * The Class LibrosController.
 */
@Controller
public class LibrosController {

	/**
	 * Gets the libros.
	 *
	 * @param req the req
	 * @param res the res
	 * @return the libros
	 */
	@RequestMapping(value = "api/getLibros", method = RequestMethod.GET)
    public @ResponseBody String getLibros(HttpServletRequest req, HttpServletResponse res) {
		
		ObjectMapper mapper = new ObjectMapper();
		
		List<LibroDTO> listLibroDto = new ArrayList<LibroDTO>();
		
		for (int i = 0; i < 3; i++) {
			listLibroDto.add(new LibroDTO("aa23aa"+i, "Titulo"+i, "Autor"+i, "Precio"+i, "http://image.casadellibro.com/a/l/t1/72/9788408152972.jpg", "editorial"+i));
		}
		
		String jsonResult = null;
		try {
			jsonResult = mapper.writeValueAsString(listLibroDto);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return jsonResult;
    }
	
	/**
	 * Sets the libro.
	 *
	 * @param req the req
	 * @param res the res
	 * @param tienda the tienda
	 * @return the string
	 * @throws IOException 
	 * @throws JsonMappingException 
	 * @throws JsonParseException 
	 */
	@RequestMapping(value = "api/setLibro", method = RequestMethod.POST)
    public @ResponseBody String setLibro(HttpServletRequest req, HttpServletResponse res , @RequestBody String libro) 
    		throws JsonParseException, JsonMappingException, IOException {
		
		ObjectMapper mapper = new ObjectMapper();

		LibroDTO libroInsert = mapper.readValue(libro, LibroDTO.class);
		
		String jsonResult = null;
		try {
			jsonResult = mapper.writeValueAsString(libroInsert);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return jsonResult;
    }
	
	
	@RequestMapping(value = "api/deleteLibro", method = RequestMethod.POST)
	public @ResponseBody String deleteLibro(HttpServletRequest req, HttpServletResponse res, @RequestBody String isbnParam)
			throws JsonGenerationException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
//		String isbn = mapper.readValue(isbnParam, String.class);
			//servicio eliminación
		Boolean result = Boolean.TRUE;
		return mapper.writeValueAsString(result);
	}
	
	@RequestMapping(value = "api/updateLibro", method = RequestMethod.POST)
	public @ResponseBody String updateLibro(HttpServletRequest req, HttpServletResponse res, @RequestBody String libro)
			throws JsonGenerationException, JsonMappingException, IOException {

		ObjectMapper mapper = new ObjectMapper();
		LibroDTO libroEntity = mapper.readValue(libro, LibroDTO.class);
		//actualizar
		LibroDTO result = libroEntity;
		return mapper.writeValueAsString(result);
	}
}
