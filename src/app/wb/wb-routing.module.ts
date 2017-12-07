import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { WBComponent }   from './wb.component';

const routes: Routes = [
    {
        path: '',
        component: WBComponent,
        data: {
            title: 'Water Based'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WBRoutingModule {}
