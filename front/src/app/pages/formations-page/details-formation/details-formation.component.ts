import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.scss']
})
export class DetailsFormationComponent implements OnInit {

  constructor(private formationsService: FormationsService, protected router: Router, protected route: ActivatedRoute) { }
  subscription?: Subscription
  formation: any
  getElemRoute?: string;
  ngOnInit(): void {
    this.getElemRoute = this.router.url.split('/')[this.router.url.split('/').length - 1];
    this.subscription = this.formationsService.currentFormation.subscribe((formation: any) => {
      if(formation){
        this.formation = formation
        this.formationsService.getDataBreadcrumb({label: formation.nom, item: 'formation'});
      }
    })
    if(sessionStorage.getItem('details-formation')){
      this.formation = sessionStorage.getItem('details-formation')
      this.formation = JSON.parse(this.formation)
    }

  }

}
