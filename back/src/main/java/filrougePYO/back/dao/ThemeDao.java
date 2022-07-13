package filrougePYO.back.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import filrougePYO.back.entity.Theme;

public interface ThemeDao extends JpaRepository<Theme, Long>{
	
}
