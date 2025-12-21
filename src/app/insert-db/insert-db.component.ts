import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-db',
  templateUrl: './insert-db.component.html',
  styleUrls: ['./insert-db.component.css']
})
export class InsertDBComponent implements OnInit {

  @Input() userData = { Name: '', Age: 0, Mark: 0 };

  constructor(public visit: MyserviceService, private router: Router){}
  ngOnInit(): void {
  }

   adduserdata():void{debugger;
    this.visit.addWebApiTab(this.userData).subscribe((result) =>{
      this.router.navigate(['/Details All']);
    }, (error) => {
      console.log(error);

    });
   }
}
