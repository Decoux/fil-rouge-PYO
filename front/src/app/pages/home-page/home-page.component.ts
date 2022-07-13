import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'src/app/services/sessions.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  subscription: any;

  constructor(private sessionsService: SessionsService) {}

  formations: any;


  ngOnInit(): void {
    this.subscription = this.sessionsService.currentFormation.subscribe(
      (formation: any) => {
        if (formation) {
          this.formations = formation;
          for (let index = 0; index < this.formations.length; index++) {
            const element = this.formations[index];
          }
        }
      }
    );
  }

}
