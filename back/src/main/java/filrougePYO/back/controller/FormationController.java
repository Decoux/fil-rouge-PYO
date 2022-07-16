package filrougePYO.back.controller;

import java.util.List;

import filrougePYO.back.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import filrougePYO.back.dao.FormationDao;
import filrougePYO.back.entity.Formation;

@RestController
@CrossOrigin
@RequestMapping("/formations")
public class FormationController {
	@Autowired
	private FormationDao formationDao;
	@Autowired
	private FormationService formationService;
	@GetMapping("")
//	@ResponseStatus(code=HttpStatus.OK)
	public List<Formation> findAll(){
		return this.formationDao.findAll();
	}
	
//	public void adds(Formation formation) {
//		this.formationDao.save(formation);
//	}
	@PostMapping("ajoutFormation")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void createFormation(@RequestBody Formation formation){
		formationService.createFormation(formation);
	}
	
}
