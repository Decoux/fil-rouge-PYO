package filrougePYO.back.dao;

import filrougePYO.back.entity.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionDao extends JpaRepository<Session,Long> {
    //@Query("select t from Test t join t.users u where u.username = :username")
//
//	@Query("select s from Session s where t.formation_id IS_NOT_NULL")
// je veux pouvoir recuperer la session de la formation créée par le formateur.
}
