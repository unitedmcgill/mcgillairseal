import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { GasketsComponent }       from './gaskets.component';
import { GasketsRoutingModule }   from './gaskets-routing.module';

@NgModule({
    imports: [
        GasketsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        GasketsComponent 
    ]
})
export class GasketsModule { }
