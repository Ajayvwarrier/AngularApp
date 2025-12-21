import { Component, OnInit } from '@angular/core';
import { MyserviceService, WebApiTab } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  GetData: WebApiTab[] = [];

  constructor(
    public details: MyserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetAllDetails();
  }

  GetAllDetails(): void {
    this.details.getAllWebApiTabs().subscribe((resp: any) => {
      this.GetData = resp;
    });
  }

  delete(id: number): void {
    this.details.deletewebapitab(id)
    .subscribe(() => {
        this.GetAllDetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
