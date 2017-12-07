import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SSComponent }   from './ss.component';

const routes: Routes = [
    {
        path: '',
        component: SSComponent,
        data: {
            title: 'Silicone Sealant'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SSRoutingModule {}
