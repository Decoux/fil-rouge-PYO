package filrougePYO.back.services;

import filrougePYO.back.entity.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import filrougePYO.back.dao.SessionDao;


@Service
public class SessionService {

    @Autowired
    private SessionDao sessionDao;

    
    public List<Session> findAll() {
        return this.sessionDao.findAll();
    }

	public void addSession(Session session){
	    this.sessionDao.save(session);
	}
}
