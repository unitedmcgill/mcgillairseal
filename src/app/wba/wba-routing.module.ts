import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { WBAComponent }   from './wba.component';

const routes: Routes = [
    {
        path: '',
        component: WBAComponent,
        data: {
            title: 'Water Based Insulation Adhesives'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WBARoutingModule {}
