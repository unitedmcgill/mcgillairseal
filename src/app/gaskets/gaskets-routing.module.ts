import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { GasketsComponent }   from './gaskets.component';

const routes: Routes = [
    {
        path: '',
        component: GasketsComponent,
        data: {
            title: 'Gaskets'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GasketsRoutingModule {}
