package filrougePYO.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import filrougePYO.back.dto.DomaineDto;
import filrougePYO.back.entity.Domaine;
import filrougePYO.back.entity.Session;
import filrougePYO.back.services.DomaineService;

@RestController
@CrossOrigin
@RequestMapping("/domaines")
public class DomaineController {
	@Autowired
	private DomaineService domaineService;
	
	@GetMapping("/themeBySousTheme")
	@ResponseStatus(code=HttpStatus.OK)
	public List<DomaineDto> findAllBySousThemes(){ 
		return this.domaineService.findAllBySousThemes();
	}
	
	@GetMapping("")
	@ResponseStatus(code=HttpStatus.OK)
	public List<Domaine> findAll(){
		return this.domaineService.findAll();
	}
	
    @PostMapping("ajout")
    @ResponseStatus(code=HttpStatus.CREATED)
    public void save(@RequestBody Domaine domaine){
        this.domaineService.save(domaine);
    }
}
