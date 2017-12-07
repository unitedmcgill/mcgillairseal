import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SBComponent }   from './sb.component';

const routes: Routes = [
    {
        path: '',
        component: SBComponent,
        data: {
            title: 'Solvent Based'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SBRoutingModule {}
