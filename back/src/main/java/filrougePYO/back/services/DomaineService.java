package filrougePYO.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import filrougePYO.back.dao.DomaineDao;
import filrougePYO.back.entity.Domaine;

@Service
public class DomaineService {
	
	@Autowired
	private DomaineDao domaineDao;
	
	public List<Domaine> findAll(){
		return this.domaineDao.findAll();
	}
}
