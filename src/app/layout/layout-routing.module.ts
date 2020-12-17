import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home-page', pathMatch: 'prefix' },
            {
                path: 'home-page',
                loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule)
            },
            {
                path: 'dashboard/:id',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            {
                path: 'blank-page/:id',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
