import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsComponent, DriverListComponent } from './components';

const routes: Routes = [
  {
    path : "",
    component : DriverListComponent
  },
  {
    path : ":id",
    component : DriverDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
