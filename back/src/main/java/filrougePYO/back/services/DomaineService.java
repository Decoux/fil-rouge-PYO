package filrougePYO.back.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import filrougePYO.back.dao.DomaineDao;
import filrougePYO.back.dto.DomaineDto;
import filrougePYO.back.dto.ThemeAvecSousThemes;
import filrougePYO.back.entity.Domaine;
import filrougePYO.back.entity.Session;
import filrougePYO.back.entity.Theme;

@Service
public class DomaineService {
	
	@Autowired
	private DomaineDao domaineDao;
	
	public List<DomaineDto> findAllBySousThemes(){
		List<Theme> themes_child = new ArrayList<Theme>();
		List<Domaine> domaines = this.domaineDao.findAll();
		List<DomaineDto> returnedDomaines = new ArrayList<>();
		buildDomainesDto(themes_child, domaines, returnedDomaines);
		return returnedDomaines;
	}

	/**
	 *
	 * @param themes_child
	 * @param domaines
	 * @param returnedDomaines
	 * Fonction qui contruit une liste de domaines avec ses thèmes et ses sous-thèmes
	 */
	private void buildDomainesDto(List<Theme> themes_child, List<Domaine> domaines, List<DomaineDto> returnedDomaines) {
		for (Domaine domaine : domaines) {
			DomaineDto domaineDto = new DomaineDto(domaine);
			for (Theme theme :  domaine.getThemes()) {
				if(theme.getParent_id() != null) {
					themes_child.add(theme);
				}
			}
			domaine.getThemes().removeIf(n -> (n.getParent_id() != null));
			List<ThemeAvecSousThemes> themes = new ArrayList<>();
			for (Theme theme :  domaine.getThemes()) {
				ThemeAvecSousThemes parent = new ThemeAvecSousThemes(theme);
		
				if(themes_child.size() > 0) {
					for (Theme child : themes_child) {
						if(child.getParent_id().equals(theme.getId())) { 
							parent.setTheme(child);
						}
					}
					
					themes.add(parent);
					domaineDto.setThemes(themes);
				}
			}
			returnedDomaines.add(domaineDto);
		}
	}

	/**
	 *
	 * @param themes_child
	 * @param domaine
	 * @param returnedDomaines
	 * Fonction qui contruit undomaines avec ses thèmes et ses sous-thèmes
	 */
	private void buildDomaineDto(List<Theme> themes_child, Domaine domaine, List<DomaineDto> returnedDomaines) {
			DomaineDto domaineDto = new DomaineDto(domaine);
			for (Theme theme :  domaine.getThemes()) {
				if(theme.getParent_id() != null) {
					themes_child.add(theme);
				}
			}
			domaine.getThemes().removeIf(n -> (n.getParent_id() != null));
			List<ThemeAvecSousThemes> themes = new ArrayList<>();
			for (Theme theme :  domaine.getThemes()) {
				ThemeAvecSousThemes parent = new ThemeAvecSousThemes(theme);
				if(themes_child.size() > 0) {
					for (Theme child : themes_child) {
						//System.out.println(child.getNom());
						if(child.getParent_id().equals(theme.getId())) {
							parent.setTheme(child);
						}
					}
					themes.add(parent);
					domaineDto.setThemes(themes);
				}
			}
			returnedDomaines.add(domaineDto);
	}

	public List<Domaine> findAll(){
		return this.domaineDao.findAll();
	}
	
	public void save(Domaine domaine){
	    this.domaineDao.save(domaine);
	}
	
   public Domaine getDomaineById(Long id){
        return this.domaineDao.findById(id).get();
     }
}
