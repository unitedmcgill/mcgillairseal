import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

import { AuthGuard } from './shared/authguard';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'leakdetect',
                loadChildren: './leakdetect/leakdetect.module#LeakdetectModule'
            },
            {
                path: 'sb',
                loadChildren: './sb/sb.module#SBModule'
            },
            {
                path: 'wb',
                loadChildren: './wb/wb.module#WBModule'
            },
            {
                path: 'ss',
                loadChildren: './ss/ss.module#SSModule'
            },
            {
                path: 'tbp',
                loadChildren: './tbp/tbp.module#TBPModule'
            },
            {
                path: 'wba',
                loadChildren: './wba/wba.module#WBAModule'
            },
            {
                path: 'sba',
                loadChildren: './sba/sba.module#SBAModule'
            },
            {
                path: 'aia',
                loadChildren: './aia/aia.module#AIAModule'
            },
            {
                path: 'gaskets',
                loadChildren: './gaskets/gaskets.module#GasketsModule'
            },
            {
                path: 'tapes',
                loadChildren: './tapes/tapes.module#TapesModule'
            },
            {
                path: 'ap',
                loadChildren: './ap/ap.module#APModule'
            },
            {
                path: 'leed',
                loadChildren: './leed/leed.module#LeedModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            },
            {
                path: 'aboutus',
                loadChildren: './aboutus/aboutus.module#AboutUsModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#LocationModule'
            }            
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
