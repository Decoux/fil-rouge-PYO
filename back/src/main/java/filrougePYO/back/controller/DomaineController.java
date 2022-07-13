package filrougePYO.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import filrougePYO.back.entity.Domaine;
import filrougePYO.back.services.DomaineService;

@RestController
@CrossOrigin
@RequestMapping("/domaines")
public class DomaineController {
	@Autowired
	private DomaineService domaineService;
	
	@GetMapping("")
	@ResponseStatus(code=HttpStatus.OK)
	public List<Domaine> findAll(){
		
		return this.domaineService.findAll();
	}
	
//	public void adds(Domaine domaine) {
//		this.formationDao.save(domaine);
//	}
}
