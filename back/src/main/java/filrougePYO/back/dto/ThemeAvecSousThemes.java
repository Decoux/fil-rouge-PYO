package filrougePYO.back.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import filrougePYO.back.entity.Domaine;
import filrougePYO.back.entity.Formation;
import filrougePYO.back.entity.Theme;

public class ThemeAvecSousThemes{
	private Long id;
	private String nom;
	private Long parent_id;
	private List<Formation> formation = new ArrayList<>();
	private List<Theme> themes = new ArrayList<>();
	
	public ThemeAvecSousThemes(Theme theme) {
		this.id = theme.getId();
		this.nom = theme.getNom();
		this.parent_id = theme.getParent_id();
		this.formation = theme.getFormation();
	}

	public List<Theme> getThemes() {
		return themes;
	}

	public void setThemes(List<Theme> themes) {
		this.themes = themes;
	}
	
	public void setTheme(Theme theme) {
		this.themes.add(theme);
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

	public Long getParent_id() {
		return parent_id;
	}

	public void setParent_id(Long parent_id) {
		this.parent_id = parent_id;
	}

	public List<Formation> getFormation() {
		return formation;
	}

	public void setFormation(List<Formation> formation) {
		this.formation = formation;
	}
	
	
}