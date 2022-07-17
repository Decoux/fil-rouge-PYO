package filrougePYO.back.services;

import filrougePYO.back.dao.FormationDao;
import filrougePYO.back.entity.Formation;
import filrougePYO.back.entity.Theme;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormationService {

    @Autowired
    private FormationDao formationDao;

    public void createFormation(Formation formation){
 		formationDao.save(formation);
    }
    
    public List<Formation> findAll(){
 		return formationDao.findAll();
    }
   
}
