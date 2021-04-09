import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { GotyService } from './services/goty.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GotyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [GotyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
