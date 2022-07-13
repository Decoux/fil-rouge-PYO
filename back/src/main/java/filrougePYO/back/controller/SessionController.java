package filrougePYO.back.controller;


import filrougePYO.back.entity.Session;
import filrougePYO.back.services.FormationService;
import filrougePYO.back.services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
     private SessionService sessionService;

@Autowired
private FormationService formationService;


    @GetMapping("")
    @ResponseStatus(code= HttpStatus.OK)
    public List<Session> findAll(){
       return this.sessionService.findAll();
    }
@PostMapping("ajout")
    @ResponseStatus(code=HttpStatus.OK)
    public void addSession(@RequestBody Session session){
        System.out.println(session.getFormation().getId());
}


}
