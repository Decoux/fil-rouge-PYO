package filrougePYO.back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import filrougePYO.back.dao.EntrepriseDao;
import filrougePYO.back.entity.Entreprise;


@Service
public class EntrepriseService {
	@Autowired
	private EntrepriseDao entrepriseDao;
	
	public Entreprise create(Entreprise entreprise) {
		return this.entrepriseDao.save(entreprise);
	}
}
