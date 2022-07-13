import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  providers: [ AdminService ],
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { }

}
