import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { AIAComponent }       from './aia.component';
import { AIARoutingModule }   from './aia-routing.module';

@NgModule({
    imports: [
        AIARoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AIAComponent 
    ]
})
export class AIAModule { }
