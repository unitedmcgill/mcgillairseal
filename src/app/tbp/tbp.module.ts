import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { TBPComponent }       from './tbp.component';
import { TBPRoutingModule }   from './tbp-routing.module';

@NgModule({
    imports: [
        TBPRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        TBPComponent 
    ]
})
export class TBPModule { }
