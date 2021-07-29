import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Prueba} from './components/prueba/prueba.component';


const routes: Routes = [
  {path: 'Prueba', component: Prueba}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
