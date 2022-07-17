package filrougePYO.back.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import filrougePYO.back.dto.ThemeAvecSousThemes;

@Entity
@Table
public class Theme {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	@Column(name="parent_id")
	private Long parent_id;
	
	@ManyToOne
	@JoinColumn(name="domaine_id")
	@JsonIgnore
	private Domaine domaine;
	@ManyToMany(cascade = CascadeType.REMOVE)
	@JoinTable(
            name = "formation_theme",
            joinColumns = @JoinColumn(name="theme_id"),
            inverseJoinColumns = @JoinColumn(name = "formation_id"))	
	private List<Formation> formation = new ArrayList<>();
	
	public Theme() {
		super();
	}

	public Theme(Theme theme) { }

	public Theme(Long id, String nom, Long parent_id, List<Formation> formation) {
		super();
		this.id = id;
		this.nom = nom;
		this.parent_id = parent_id;
		this.formation = formation;
	}

	public Theme(Long id, String nom, Long parent_id, Domaine domaine) {
		
		this.setId(id);
		this.setNom(nom);
		this.setParent_id(parent_id);
		this.setDomaine(domaine);
	} 
	
	public void addFormation(Formation formation) {
	    this.formation.add(formation);
	    formation.getThemes().add(this);
	  }
	
	public List<Formation> getFormation() {
		return formation;
	}
	
	public void setFormation(List<Formation> formation) {
		this.formation = formation;
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
	
	public Domaine getDomaine() {
		return domaine;
	}
	
	public void setDomaine(Domaine domaine) {
		this.domaine = domaine;
	}
}
