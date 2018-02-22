import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { WBComponent }       from './wb.component';
import { WBRoutingModule }   from './wb-routing.module';

@NgModule({
    imports: [
        WBRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        WBComponent 
    ]
})
export class WBModule { }
