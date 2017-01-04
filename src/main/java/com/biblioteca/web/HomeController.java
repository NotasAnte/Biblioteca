/**
 * 
 */
package com.biblioteca.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * The Class HomeController.
 *
 * @author ALB
 */
@Controller
public class HomeController {
	
	/**
	 * First page.
	 *
	 * @param req the req
	 * @param res the res
	 * @return the model and view
	 */
	@RequestMapping(value = "/init.html", method = RequestMethod.GET)
    public ModelAndView firstPage(HttpServletRequest req, HttpServletResponse res) {
		
		ModelAndView view = new ModelAndView("/index.tile");
		view.addObject("title", "Almacen Libros");
		view.addObject("name", "Almacen de Libros Alberto");
        return view;
    }
 

}
