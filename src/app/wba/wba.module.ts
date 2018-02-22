import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { WBAComponent }       from './wba.component';
import { WBARoutingModule }   from './wba-routing.module';

@NgModule({
    imports: [
        WBARoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        WBAComponent 
    ]
})
export class WBAModule { }
