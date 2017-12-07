import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { LeedComponent }   from './leed.component';

const routes: Routes = [
    {
        path: '',
        component: LeedComponent,
        data: {
            title: 'Leed'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeedRoutingModule {}
