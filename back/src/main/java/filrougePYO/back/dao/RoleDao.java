package filrougePYO.back.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import filrougePYO.back.entity.Formation;
import filrougePYO.back.entity.Role;

public interface RoleDao extends JpaRepository<Role, Long>{

}
