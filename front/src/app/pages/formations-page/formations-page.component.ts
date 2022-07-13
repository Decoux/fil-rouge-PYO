import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-formations-page',
  templateUrl: './formations-page.component.html',
  styleUrls: ['./formations-page.component.scss']
})
export class FormationsPageComponent implements OnInit {
  
  items = [{label: 'Liste des formations', item: "first"}];
  subscription?: Subscription
  isShowBreadcrumb = true
  getElemRoute: any
    constructor(private route: Router, private formationsService: FormationsService) {
    
  }
  itemClicked($event: any){
    
  }

  ngOnInit(): void {

    this.getElemRoute = this.route.url.split('/')[this.route.url.split('/').length - 1];
    

    // this.subscription = this.formationsService.currentBreadcrumb.subscribe((label: any) => {
    //   this.isShowBreadcrumb = false
    //   if(label.item == 'theme'){
    //     console.log(label);
    //     if(this.items.find(element =>  element.item == "theme" )){
    //       this.items[1] = label
    //     }else {
    //       this.items.push(label)
    //     }
    //   }else if (label.item == 'formation'){
    //     if(this.items.find(element =>  element.item == "formation" )){
    //       this.items[2] = label
    //     }else {
    //       this.items.push(label)
    //     }
    //   }
    //   setTimeout(() => {
    //     this.isShowBreadcrumb = true
    //   }, 100);
    // })
  }

}
