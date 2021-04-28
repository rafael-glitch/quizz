import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent}from "../app/components/home/home.component";
import  {WeatherComponent}from"../app/components/weather/weather.component";


const routes: Routes = [
  {path:"",component:HomeComponent  },
  {path:"weather",component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
