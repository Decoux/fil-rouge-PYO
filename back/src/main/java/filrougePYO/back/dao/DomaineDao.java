package filrougePYO.back.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import filrougePYO.back.entity.Domaine;

public interface DomaineDao extends JpaRepository<Domaine, Long> {
	//@Query("select t from Test t join t.users u where u.username = :username")
//
//	@Query("select d from Domaine d join d.theme t where t.formation_id IS_NOT_NULL")
	
	
}
