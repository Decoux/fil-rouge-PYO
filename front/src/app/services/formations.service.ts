import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

interface domaines{
  id: string;
  nom: number;
  themes: []
}

@Injectable({
  providedIn: 'root'
})
export class FormationsService  {

  private domainesSource = new BehaviorSubject({});
  currentDomaines = this.domainesSource.asObservable();

  private themeSource = new BehaviorSubject(null);
  currentTheme = this.themeSource.asObservable();

  private formationSource = new BehaviorSubject(null);
  currentFormation = this.formationSource.asObservable();

  data = []
  themes: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:3000/domaines').subscribe((domaines: any) =>{
      if(domaines.length > 0){
        this.domainesSource.next(domaines)
        this.data = domaines        
      }
    })
   }

   changeTheme(theme: any){
    this.themeSource.next(theme)
   }

   detailsFormation(formation: any){
    this.formationSource.next(formation)
   }

}
