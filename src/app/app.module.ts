import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';


import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
   
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
   
   
    
    BrowserAnimationsModule
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
