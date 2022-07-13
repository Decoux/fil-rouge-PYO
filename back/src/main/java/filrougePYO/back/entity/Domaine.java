package filrougePYO.back.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Domaine {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	
	@OneToMany(mappedBy = "domaine")
	private List<Theme> themes = new ArrayList<>();
	
	public List<Theme> getThemes() {
		return themes;
	}

	public void setThemes(List<Theme> themes) {
		this.themes = themes;
	}

	public Domaine() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Domaine(Long id, String nom) {
		super();
		this.setId(id);
		this.setNom(nom);
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
	
	
	
	
}
