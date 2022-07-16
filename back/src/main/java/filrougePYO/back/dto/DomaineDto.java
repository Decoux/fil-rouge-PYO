package filrougePYO.back.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;

import filrougePYO.back.entity.Domaine;
import filrougePYO.back.entity.Theme;

public class DomaineDto {
	
	private Long id;
	private String nom;
	private List<ThemeAvecSousThemes> themes;
	
	public DomaineDto(Domaine domaine) {
		this.id = domaine.getId();
		this.nom = domaine.getNom();
		this.themes = new ArrayList<>();		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public List<ThemeAvecSousThemes> getThemes() {
		return themes;
	}

	public void setThemes(List<ThemeAvecSousThemes> themes) {
		this.themes = themes;
	}
	
	
	
	
	
}
