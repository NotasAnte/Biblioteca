package com.biblioteca.dto;

import java.io.Serializable;

/**
 * The Class LibroDTO.
 */
public class LibroDTO implements Serializable{
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 5688877457874747158L;
	
	/** The isbn. */
	private String isbn;
	
	/** The titulo. */
	private String titulo;
	
	/** The autor. */
	private String autor;
	
	/** The precio. */
	private String precio;
	
	/** The img. */
	private String img;
	
	/** The editorial. */
	private String editorial;
	
	

	/**
	 * Instantiates a new libro dto.
	 */
	public LibroDTO() {
	}

	/**
	 * Instantiates a new libro dto.
	 *
	 * @param isbn the isbn
	 * @param titulo the titulo
	 * @param autor the autor
	 * @param precio the precio
	 * @param img the img
	 * @param editorial the editorial
	 */
	public LibroDTO(String isbn, String titulo, String autor, String precio, String img, String editorial) {
		this.isbn = isbn;
		this.titulo = titulo;
		this.autor = autor;
		this.precio = precio;
		this.img = img;
		this.editorial = editorial;
	}

	/**
	 * Gets the isbn.
	 *
	 * @return the isbn
	 */
	public String getIsbn() {
		return isbn;
	}

	/**
	 * Sets the isbn.
	 *
	 * @param isbn the isbn to set
	 */
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	/**
	 * Gets the titulo.
	 *
	 * @return the titulo
	 */
	public String getTitulo() {
		return titulo;
	}

	/**
	 * Sets the titulo.
	 *
	 * @param titulo the titulo to set
	 */
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	/**
	 * Gets the autor.
	 *
	 * @return the autor
	 */
	public String getAutor() {
		return autor;
	}

	/**
	 * Sets the autor.
	 *
	 * @param autor the autor to set
	 */
	public void setAutor(String autor) {
		this.autor = autor;
	}

	/**
	 * Gets the precio.
	 *
	 * @return the precio
	 */
	public String getPrecio() {
		return precio;
	}

	/**
	 * Sets the precio.
	 *
	 * @param precio the precio to set
	 */
	public void setPrecio(String precio) {
		this.precio = precio;
	}

	/**
	 * Gets the img.
	 *
	 * @return the img
	 */
	public String getImg() {
		return img;
	}

	/**
	 * Sets the img.
	 *
	 * @param img the img to set
	 */
	public void setImg(String img) {
		this.img = img;
	}

	/**
	 * Gets the editorial.
	 *
	 * @return the editorial
	 */
	public String getEditorial() {
		return editorial;
	}

	/**
	 * Sets the editorial.
	 *
	 * @param editorial the editorial to set
	 */
	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}

}
