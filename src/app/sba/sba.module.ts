import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SBAComponent }       from './sba.component';
import { SBARoutingModule }   from './sba-routing.module';

@NgModule({
    imports: [
        SBARoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SBAComponent 
    ]
})
export class SBAModule { }
