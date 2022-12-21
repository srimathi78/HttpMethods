import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IDepartment } from 'src/assets/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments(_departmentId: any, _newformData: { id: any; name: string; designation: string; }) {
    throw new Error('Method not implemented.');
  }
  

  
  constructor(private httpClient: HttpClient) { }

getmethod(){
  return this.httpClient.get(" http://localhost:3000/posts")
}



postmethod(data:any){
  return this.httpClient.post(" http://localhost:3000/posts", data)
}


putmethod(id:any,data:any){
  return this.httpClient.put(" http://localhost:3000/posts/"+ id, data)
}


delmethod(id:any){
  return this.httpClient.delete(" http://localhost:3000/posts/"+ id)
}

 
  }

