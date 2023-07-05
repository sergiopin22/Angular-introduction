import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { ContadorModule } from './contador/contador.module';

//Tarea: 
//crear un nuevo modulo llamado contadorModule
// declaraciones y exportaciones

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
