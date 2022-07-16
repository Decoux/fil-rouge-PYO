import { Component, Input, OnInit } from '@angular/core';
import FormationModel from 'src/app/models/formation.model';
import { FormationsService } from 'src/app/services/formations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.scss'],
  providers: [FormationsService]
})
export class FormationCardComponent implements OnInit {

  @Input() formations!: FormationModel[];
  regexUri: RegExp = / /g

  constructor(private formationsService: FormationsService, private router: Router) { }

  ngOnInit(): void {}


   showDetailsFormation(formation: any){
  
    
    this.formationsService.detailsFormation(formation);
    this.router.navigate([this.router.url, formation.nom.replace(this.regexUri, '-'), formation.id])
    sessionStorage.setItem("details-formation",  JSON.stringify(formation))
  }

  login(formation: any){
    this.formationsService.detailsFormation(formation);
    this.router.navigate([this.router.url, formation.nom.replace(this.regexUri, '-'), formation.id, 'inscription-client'])
    sessionStorage.setItem("details-formation",  JSON.stringify(formation))
  }

}
