import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.scss']
})
export class DetailsFormationComponent implements OnInit {

  constructor(private formationsService: FormationsService) { }
  subscription?: Subscription
  formation: any
  ngOnInit(): void {
    this.subscription = this.formationsService.currentFormation.subscribe((formation: any) => {
      if(formation){
        this.formation = formation
      }
    })
    if(sessionStorage.getItem('details-formation')){
      this.formation = sessionStorage.getItem('details-formation')
      this.formation = JSON.parse(this.formation)
    }

  }

}
