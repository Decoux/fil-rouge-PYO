package filrougePYO.back.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import filrougePYO.back.entity.Formation;

public interface FormationDao extends JpaRepository<Formation, Long> {

}
