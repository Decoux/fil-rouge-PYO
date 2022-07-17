package filrougePYO.back.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import filrougePYO.back.entity.Utilisateur;


@Repository
@Transactional
public interface UtilisateurDao extends JpaRepository<Utilisateur, Long>{
	@Query("SELECT u FROM Utilisateur u WHERE u.role_id = :id")
	public List<Utilisateur> findByRole(@Param("id") Long id);
}
