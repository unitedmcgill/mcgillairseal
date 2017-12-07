import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SBComponent }       from './sb.component';
import { SBRoutingModule }   from './sb-routing.module';

@NgModule({
    imports: [
        SBRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SBComponent 
    ]
})
export class SBModule { }
