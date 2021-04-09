import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [    

    { path: 'home', component: HomeComponent },
    { path: 'goty', component: GotyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
    ]
    

    @NgModule({
        declarations: [],
        imports: [
          CommonModule,
          RouterModule.forRoot(routes)
        ],
        exports: [
          RouterModule
        ]
      })
      export class AppRoutingModule { }
