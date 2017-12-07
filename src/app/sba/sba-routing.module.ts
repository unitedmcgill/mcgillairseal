import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SBAComponent }   from './sba.component';

const routes: Routes = [
    {
        path: '',
        component: SBAComponent,
        data: {
            title: 'Solvent Based Insulation Adhesives'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SBARoutingModule {}
