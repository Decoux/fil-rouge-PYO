import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-themes-page',
  templateUrl: './themes-page.component.html',
  styleUrls: ['./themes-page.component.scss']
})
export class ThemesPageComponent implements OnInit {

  constructor(private formationsService: FormationsService) { }
  subscription!: Subscription;
  domaines: any = {}
  ngOnInit(): void {
    // Partage les donnée depuis le serviceFormation
    // this.subscription = this.formationsService.currentDomaines.subscribe((message: any) => {
    //   if(message.length){
    //     this.domaines = message
    //   }
    // })
  }

}
