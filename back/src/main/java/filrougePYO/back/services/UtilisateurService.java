package filrougePYO.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import filrougePYO.back.dao.UtilisateurDao;
import filrougePYO.back.entity.Utilisateur;

@Service
public class UtilisateurService {
	@Autowired
	private UtilisateurDao utilisateurDao;
	
	public List<Utilisateur> findAll(){
		return utilisateurDao.findAll();
	}
	
	public Utilisateur addUser(Utilisateur utilisateur) {
		return this.utilisateurDao.saveAndFlush(utilisateur);
	}
	
	public List<Utilisateur> findByRole(Long id){
		return this.utilisateurDao.findByRole(id);
	}

}
