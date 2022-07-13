package filrougePYO.back.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Role {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Role(Long id, String nom) {
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
	
	
	public  String toString(){
		return this.getNom() + "/" + this.getId();
	}
}
