package filrougePYO.back.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import filrougePYO.back.entity.Utilisateur;


public interface UtilisateurDao extends JpaRepository<Utilisateur, Long>{
	
}
