package filrougePYO.back.controller;

import java.sql.Date;
import java.util.Iterator;
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

import filrougePYO.back.dao.RoleDao;
import filrougePYO.back.entity.Role;
import filrougePYO.back.entity.Utilisateur;
import filrougePYO.back.services.EntrepriseService;
import filrougePYO.back.services.UtilisateurService;

@RestController
@CrossOrigin
@RequestMapping("/utilisateurs")
public class UtilisateurController {
	@Autowired
	private UtilisateurService utilisateurService;
	@Autowired
	private EntrepriseService entrepriseService;
	@Autowired
	private RoleDao roleDao;
	private Role role = new Role();
	@GetMapping("")
	@ResponseStatus(code=HttpStatus.OK)
	public List<Utilisateur> findAll(){
		return this.utilisateurService.findAll();
	}
	
	@PostMapping("ajout")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addUser(@RequestBody Utilisateur utilisateur) {
		System.out.println(utilisateur.getNom());
		
		
		utilisateur.setRole_id((long) 3);
		System.out.println(this.role.toString());

		System.out.println(utilisateur.toString());
//		Role role = new Role()
//		this.role.setId(1);
		
		entrepriseService.create(utilisateur.getEntreprise());
//		utilisateur.setEntreprise(null);
		//System.out.println(entreprise);
//		this.roleDao.save(new Role());
//		utilisateur.setBirthDay(new Date(utilisateur.getBirthDay()));
//		System.out.println(utilisateur.g);
		System.out.println(this.role.getId());
		this.utilisateurService.addUser(utilisateur);
	}
}
