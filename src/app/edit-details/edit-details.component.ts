import { Component, OnInit,Input } from '@angular/core';
import { MyserviceService, WebApiTab } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input() productData: any = { name:'',age:'0',mark:'0'};
  id: number =0;
  constructor(public rest: MyserviceService, private route: ActivatedRoute, private router: Router ){}
   ngOnInit(): void {
    var pId = this.route.snapshot.paramMap.get("id");//id get from querystring or url
    if(pId !== null && pId !== undefined) {
      this.id=+pId;
    }
    this.rest.getwebapitabwithid(this.id).subscribe((data: {}) =>{ 
        this.productData = data; 
   });
  }
  updateProdect():void{
      this.rest.updateWebApiTab(this.id, this.productData).subscribe((result) =>{
      this.router.navigate(['/Details All/']);
    }, (error) => {
      console.log(error);
    });
  }
}