import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable
({providedIn: 'root'})

export class DomaineService{

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

   ajouterUnDomaine(value: any){
    this.http.post("http://localhost:8080/domaines/ajout", value).subscribe()
   }

   public getAll(){
    return this.http.get("http://localhost:8080/domaines");
   }
}
