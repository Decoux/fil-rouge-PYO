package filrougePYO.back.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Test {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="lien")
	 private String lien;
	@Column(name="note")
	 private Integer note;
	@ManyToOne
	@JoinColumn(name="session_id")
	 private Session session;
	@ManyToOne
	@JoinColumn(name="utilisateur_id")
	 private Utilisateur utilisateur;
	 
	public Test() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Test(Long id, String lien, Integer note, Session session, Utilisateur utilisateur) {
		super();
		this.setId(id);
		this.setLien(lien);
		this.setNote(note);
		this.setSession(session);
		this.setUtilisateur(utilisateur);
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getLien() {
		return lien;
	}
	
	public void setLien(String lien) {
		this.lien = lien;
	}
	
	public Integer getNote() {
		return note;
	}
	
	public void setNote(Integer note) {
		this.note = note;
	}
	
	public Session getSession() {
		return session;
	}
	
	public void setSession(Session session) {
		this.session = session;
	}
	
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	 
	 
}
