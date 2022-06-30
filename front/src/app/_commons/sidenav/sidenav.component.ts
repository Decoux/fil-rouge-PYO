import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
import { DomainesComponent } from 'src/app/pages/liste-formations/domaines/domaines.component';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  subscription!: Subscription;
  domaines: any = []
  message: any;
  @ViewChildren("listeUls") listeUls!: QueryList<any>;
  @ViewChild(DomainesComponent) child: any;

  constructor(private formationsService: FormationsService, private _renderer: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
    this.subscription = this.formationsService.currentDomaines.subscribe((message: any) => {
      if(message.length){
        this.domaines = message
      }
    })
  }

  onClick($event: any){
      for (const i of this.listeUls) {
        i.isShowThemes = false
        i.isShowSubThemes = false
      }
    }
}
