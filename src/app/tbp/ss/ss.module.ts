import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SSComponent }       from './ss.component';
import { SSRoutingModule }   from './ss-routing.module';

@NgModule({
    imports: [
        SSRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SSComponent 
    ]
})
export class SSModule { }
