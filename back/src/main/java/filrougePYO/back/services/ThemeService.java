package filrougePYO.back.services;

import filrougePYO.back.dao.ThemeDao;
import filrougePYO.back.entity.Domaine;
import filrougePYO.back.entity.Formation;
import filrougePYO.back.entity.Theme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ThemeService {

    @Autowired
    private ThemeDao themeDao;
    //private List<>

    public void createThemeFormation(Theme theme, Formation formation){

        List<Object> data = new ArrayList<>();
        data.add(theme);
        data.add (formation);
       // themeDao.saveAll(data);
    }

    public List<Theme> getThemes(){
      return themeDao.findAll();
    }
    
    public Theme getThemeById(Long id){
        return themeDao.findById(id).get();
     }
    
    public Optional<Theme> getThemeWithFormations(int id) {
		return themeDao.findById((long) id);   
	}
    
	public void save(Theme theme){
	    this.themeDao.save(theme);
	}
}
