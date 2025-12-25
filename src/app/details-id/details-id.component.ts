import { Component ,OnInit } from '@angular/core';
import { MyserviceService, WebApiTab } from '../myservice.service';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-id',
  templateUrl: './details-id.component.html',
  styleUrls: ['./details-id.component.css']
})
export class DetailsIdComponent implements OnInit {
  student: WebApiTab | undefined;
  id: number =0;
  constructor(public rest: MyserviceService, private route: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    var pId = this.route.snapshot.paramMap.get("id");//id get from querystring or url
    if(pId !== null && pId !== undefined) {
      this.id=+pId;
    }
    this.rest.getwebapitabwithid(this.id).subscribe(
      (data: WebApiTab) => this.student = {...data} 
    );
  }
  
}
