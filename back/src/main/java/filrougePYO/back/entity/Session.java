package filrougePYO.back.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

enum Type { INTER, INTRA }

@Entity
@Table
public class Session {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="date")
	private Date date;
	@Column(name="lieu")
	private String lieu;
	@ManyToOne
	@JoinColumn(name="formation_id")
	private Formation formation;
	@Column(name="lien")
	private String lien;
	@Column(name="type")
	private Type type;
	@Column(name="confirmation_formateur")
	private Boolean confirmation_formateur;
	
	public Session() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Session(Long id, Date date, String lieu, Formation formation, String lien, Type type,Boolean confirmation_formateur) {
		super();
		this.setId(id);
		this.setDate(date);
		this.setLieu(lieu);
		this.setFormation(formation);
		this.setLien(lien);
		this.setType(type);
		this.setConfirmation_formateur(confirmation_formateur);
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public String getLieu() {
		return lieu;
	}
	
	public void setLieu(String lieu) {
		this.lieu = lieu;
	}
	
	public Formation getFormation() {
		return formation;
	}
	
	public void setFormation(Formation formation) {
		this.formation = formation;
	}
	
	
	public String getLien() {
		return lien;
	}
	
	public void setLien(String lien) {
		this.lien = lien;
	}
	
	public Type getType() {
		return type;
	}
	
	public void setType(Type type) {
		this.type = type;
	}
	
	public Boolean getConfirmation_formateur() {
		return confirmation_formateur;
	}
	
	public void setConfirmation_formateur(Boolean confirmation_formateur) {
		this.confirmation_formateur = confirmation_formateur;
	}
	
	
}

