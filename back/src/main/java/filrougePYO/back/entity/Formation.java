package filrougePYO.back.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table
public class Formation {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	@Column(name="personnalise")
	private Boolean personnalise;
	@Column(name="description", columnDefinition = "TEXT")
	private String description;
	@Column(name="prix")
	private Integer prix;
	public Integer getPrix() {
		return prix;
	}

	public void setPrix(Integer prix) {
		this.prix = prix;
	}

	@ManyToMany
	@JoinTable(name = "formation_theme", joinColumns = @JoinColumn(name="formation_id"), inverseJoinColumns = @JoinColumn(name = "theme_id"))
	@JsonIgnore
	private List<Theme> themes = new ArrayList<Theme>();

	public void setThemes(Theme themes) {
		
		this.themes.add(themes);
	}
	



	public Formation(Long id, String nom, Boolean personnalise, String description, Integer prix, Theme themes) {
		super();
		this.id = id;
		this.nom = nom;
		this.personnalise = personnalise;
		this.description = description;
		this.prix = prix;
		this.setThemes(themes);
	}

	public List<Theme> getThemes() {
		return themes;
	}

	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Formation(Long id, String nom, Boolean personnalise, String description, Integer prix) {
		System.out.println("sqdqsdqsdqdsqsd");
		this.setId(id);
		this.setNom(nom);
		this.setPersonnalise(personnalise);
		this.setDescription(description);
		this.setPrix(prix);
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

	public Boolean getPersonnalise() {
		return personnalise;
	}

	public void setPersonnalise(Boolean personnalise) {
		this.personnalise = personnalise;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String toString() {
		return this.getNom() + "/" + this.getDescription() + "/" +this.getPersonnalise() + "/" + this.getPrix()  +"/" + this.getThemes() + "/";
	}
	
	
}
