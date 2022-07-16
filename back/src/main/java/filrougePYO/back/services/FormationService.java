package filrougePYO.back.services;

import filrougePYO.back.dao.FormationDao;
import filrougePYO.back.entity.Formation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormationService {

    @Autowired
    private FormationDao formationDao;

    public void createFormation(Formation formation){
//        System.out.println(formation.getTheme());
    	//System.out.println(formation.theme);
    	 //Formation data = new Formation(formation);
    	System.out.println(formation.toString());
//    	 System.out.println(formation.getThemes());
//    	 System.out.println(formation.getPrix());
    	System.out.println(formation.getPersonnalise());
    	System.out.println(formation.getThemes());
         formationDao.save(formation);
    }
    
   
}
