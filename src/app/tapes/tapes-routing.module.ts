import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { TapesComponent }   from './tapes.component';

const routes: Routes = [
    {
        path: '',
        component: TapesComponent,
        data: {
            title: 'Tapes'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TapesRoutingModule {}
