import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-home-formations',
  templateUrl: './home-formations.component.html',
  styleUrls: ['./home-formations.component.scss']
})
export class HomeFormationsComponent implements OnInit {

  subscription?: Subscription
  domaines: any
  constructor(private formationsService: FormationsService) { }

  ngOnInit(): void {
    this.subscription = this.formationsService.currentDomaines.subscribe((message: any) => {
      if(message.length){
        this.domaines = message
      }
    })
  }



}
