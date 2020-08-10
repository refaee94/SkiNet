import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { BasketComponent } from './basket.component';

const routes:Routes=[{path:'',component:BasketComponent}]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class BasketRoutingModule { }
