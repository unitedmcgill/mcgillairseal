import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { APComponent }   from './ap.component';

const routes: Routes = [
    {
        path: '',
        component: APComponent,
        data: {
            title: 'Associated Products'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class APRoutingModule {}
