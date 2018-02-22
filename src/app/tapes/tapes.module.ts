import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { TapesComponent }       from './tapes.component';
import { TapesRoutingModule }   from './tapes-routing.module';

@NgModule({
    imports: [
        TapesRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        TapesComponent 
    ]
})
export class TapesModule { }
