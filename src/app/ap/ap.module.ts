import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { APComponent }       from './ap.component';
import { APRoutingModule }   from './ap-routing.module';

@NgModule({
    imports: [
        APRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        APComponent 
    ]
})
export class APModule { }
