package filrougePYO.back.controller;

import java.util.List;
import java.util.Optional;

import filrougePYO.back.services.DomaineService;
import filrougePYO.back.services.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import filrougePYO.back.dao.ThemeDao;
import filrougePYO.back.entity.Domaine;
import filrougePYO.back.entity.Theme;

@RestController
@CrossOrigin
@RequestMapping("/themes")
public class ThemeController {

	@Autowired
	private ThemeService themeService;
	@Autowired
	private DomaineService domaineService;

	@GetMapping("")
	@ResponseStatus(code=HttpStatus.OK)
	public List<Theme> findAll(){
		return this.themeService.getThemes();
	}
	
	@RequestMapping(value = "id={id}", method = RequestMethod.GET)
	@ResponseBody
	public Optional<Theme> getThemeWithFormations(@PathVariable int id){
		return themeService.getThemeWithFormations(id);
	}
	
    @PostMapping("ajout/{domaineId}")
    @ResponseStatus(code=HttpStatus.CREATED)
    public void save(@PathVariable(value = "domaineId") Long domaineId, @RequestBody Theme theme){
		Domaine domaine = this.domaineService.getDomaineById(domaineId);
		theme.setDomaine(domaine);
        this.themeService.save(theme);
    }
	
}
