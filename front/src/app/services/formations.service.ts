import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Domaine from '../models/domaine.model';

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

  private breadcrumbSource = new BehaviorSubject(null);
  currentBreadcrumb = this.breadcrumbSource.asObservable();

  data = []
  data2 = []
  themes: any = {}
  domaines: any = [];
  urlApi="http://localhost:8080"

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8080/domaines/themeBySousTheme').subscribe((domaines: any) =>{

      if(domaines.length > 0){
        domaines.forEach((val: Domaine) => this.domaines.push(Object.assign({}, val)));
        for (let index = 0; index < this.domaines.length; index++) {
          const domaine = this.domaines[index];
          for (let index = 0; index < domaine.themes.length; index++) {
            const theme = domaine.themes[index];
            if(theme.themes.length > 0){
              let parent = Object.assign({}, theme)
              delete parent.themes
              delete theme.formation
              theme.themes.unshift(parent)
            }
          }
        }
       }
        this.domainesSource.next(domaines)
        this.data = domaines
    })
   }

   getDataBreadcrumb(label: any){
    this.breadcrumbSource.next(label)
   }

   changeTheme(theme: any){    
    this.themeSource.next(theme)
   }

   detailsFormation(formation: any){
    this.formationSource.next(formation)
   }

   envoiFormulaire(formation: any){
    this.http.post(this.urlApi+"/formations/ajoutFormation", formation).subscribe();
    console.log(formation)
   }

}
