import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { LeedComponent }       from './leed.component';
import { LeedRoutingModule }   from './leed-routing.module';

@NgModule({
    imports: [
        LeedRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        LeedComponent 
    ]
})
export class LeedModule { }
