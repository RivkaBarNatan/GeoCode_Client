import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './Components/result/result.component';
import { StartComponent } from './Components/start/start.component';

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "Result", component: ResultComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
