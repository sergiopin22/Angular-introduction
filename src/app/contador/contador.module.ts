import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [ // exportarlo para poder usar este componente  fuera de este modulo
        ContadorComponent
    ]
})
export class ContadorModule {}