import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

interface item{
  label:string;
  value:string;
}

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  providers: [],
  styleUrls: ['./admin-cards.component.scss']
})
export class AdminCardsComponent implements OnInit {

  items:item[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.items = this.adminService.shareItems();
  }

}
