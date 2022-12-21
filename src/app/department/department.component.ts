import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 departments: any; 
  departmentId: any; 

  constructor(private departmentService: DepartmentService) { }
list:any
  ngOnInit() {

    this.departmentService.getmethod().subscribe(data=>{
      this.list=data
    })    
  }
  updateDep(data:any){
     this.departmentService.postmethod(data).subscribe(data=>{
      console.log(data);
     })           
  } 

update(id:any){

 const newdata= {id: id,title:"softpath", author: "optevus"}
  this.departmentService.putmethod(id,newdata).subscribe(result=>{
    
        console.log(result);
  })}                                                                                                                                                                                                                                                                                                  

delete(id:any){
  // const newdata= {id: id}
  this.departmentService.delmethod(id).subscribe(id=>{
    console.log(id);
    })
}
}









  // function updateDep(departmentId: any) {
  //   throw new Error('Function not implemented.');
  // }
// function subscribe(arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }

