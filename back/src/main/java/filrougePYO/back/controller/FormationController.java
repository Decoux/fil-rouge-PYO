package filrougePYO.back.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import filrougePYO.back.services.FormationService;
import filrougePYO.back.services.ThemeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.ConfigurationPropertyName.Form;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Array;

import filrougePYO.back.dao.FormationDao;
import filrougePYO.back.entity.Formation;
import filrougePYO.back.entity.Theme;

@RestController
@CrossOrigin
@RequestMapping("/formations")
public class FormationController {
	@Autowired
	private ThemeService themeService;
	@Autowired
	private FormationService formationService;
	@GetMapping("/findAll")
	@ResponseStatus(code=HttpStatus.OK)
	public List<Formation> findAll(){
		return this.formationService.findAll();
	}
	
	@PostMapping("/ajoutFormation/{themeId}")
	@ResponseStatus(code=HttpStatus.OK)
	  public void addFormation(@PathVariable(value = "themeId") Long themeId, @RequestBody Formation formationRequest) {
		Theme themeReq = themeService.getThemeById(themeId);
		List<Theme> themeList = new ArrayList<Theme>();
		themeList.add(themeReq);
		formationRequest.setThemes(themeList);
		formationService.createFormation(formationRequest);
	}
	
}
