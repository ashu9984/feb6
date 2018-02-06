import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import'rxjs/add/operator/map'
@Injectable()
export class MapService {

  constructor(private http:Http) { 

  }
  
  get(){
   return this.http.get("http://localhost:8000/geta").map(result=>result.json());

  }
  getproduct(){
    return this.http.get("http://localhost:8000/product/getdata").map(result=>result.json());
 
   }

  
    
   deleteUser(_id:string) {
    return this.http.delete('http://localhost:8000/product/delete/'+_id);
}
}

