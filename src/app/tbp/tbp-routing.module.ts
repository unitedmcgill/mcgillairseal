import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { TBPComponent }   from './tbp.component';

const routes: Routes = [
    {
        path: '',
        component: TBPComponent,
        data: {
            title: 'Tape/Butyl/Plyurethane Sealant'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TBPRoutingModule {}
