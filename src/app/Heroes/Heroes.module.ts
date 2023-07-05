import { NgModule } from '@angular/core';
import { HeoreComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeoreComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
       CommonModule
    ]
})
export class HeroesModule {

}