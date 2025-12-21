import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WebApiTab{
Action: any;
  Id: number;
  Name: string;
  Age: number;
  Mark: number;
}
const point = 'http://localhost:54696/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  addWebApiTab(product: any): Observable<any>{
    return this.http.post(point + 'postwebapitab', product);
  }
  getAllWebApiTabs():Observable<any> {
    return this.http.get<WebApiTab>(point + 'getallwebapitabs');
  }
  deletewebapitab(id: number):Observable<any>{
    return this.http.delete<WebApiTab>(point + 'deletewebapitab/' + id);
  }
  getwebapitabwithid(id:number):Observable<any>{
    return this.http.get<WebApiTab>(point +'getwebapitabwithid/'+id);
  }
  updateWebApiTab(id: number, product:WebApiTab): Observable<any>{
    return this.http.put<WebApiTab>(point+ 'putwebapitab/'+id, product)
  }
}
