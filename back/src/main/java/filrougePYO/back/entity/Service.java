package filrougePYO.back.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Service {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	@Column(name="mail")
	private String mail;
	@Column(name="telephone")
	private String telephone;
	
	public Service() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Service(Long id, String nom, String mail, String telephone) {
		super();
		this.setId(id);
		this.setNom(nom);
		this.setMail(mail);
		this.setTelephone(telephone);
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
	
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	
	public String getTelephone() {
		return telephone;
	}
	
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

}
