import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Praktikum3Component } from './pages/praktikum3/praktikum3.component';
import { Praktikum4Component } from './pages/praktikum4/praktikum4.component';
import { Praktikum5Component } from './pages/praktikum5/praktikum5.component';
import { Praktikum6Component } from './pages/praktikum6/praktikum6.component';
import { Praktikum7Component } from './pages/praktikum7/praktikum7.component';
import { Praktikum8Component } from './pages/praktikum8/praktikum8.component';
import { Praktikum9Component } from './pages/praktikum9/praktikum9.component';
import { Praktikum10Component } from './pages/praktikum10/praktikum10.component';

const routes: Routes = [
	{
		path:'praktikum3',
		component:Praktikum3Component
	},
	{
		path:'praktikum4',
		component:Praktikum4Component

	},
	{
		path:'praktikum5',
		component:Praktikum5Component
	},
	{
		path:'praktikum6',
		component:Praktikum6Component
	},
	{
		path:'praktikum7',
		component:Praktikum7Component
	},
	{
		path:'praktikum8',
		component:Praktikum8Component
	},
	{
		path:'praktikum9',
		component:Praktikum9Component
	},
	{
		path:'praktikum10',
		component:Praktikum10Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
