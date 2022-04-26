import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Test2Component} from "./test2.component";
import {TestComponent} from "./test.component";

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'test2', component: Test2Component },
  { path: '**', redirectTo: '/test', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
