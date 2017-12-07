import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AIAComponent }   from './aia.component';

const routes: Routes = [
    {
        path: '',
        component: AIAComponent,
        data: {
            title: 'Aerosol Insulation Adhesives'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AIARoutingModule {}
