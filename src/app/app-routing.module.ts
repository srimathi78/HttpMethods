import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'Home', component:HomeComponent},
  { path:'update', component: DepartmentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
