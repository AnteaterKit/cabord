import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoPath} from './demo-path';

export const appRoutes: Routes = [
    {
        path: DemoPath.WhatIsCabord,
        loadChildren: async () =>
            import(`../pages/documentation/what-is-cabord/what-is-cabord.module`).then(
                m => m.WhatIsCabordModule,
            ),
        data: {
            title: `What is Caboard?`,
        },
    },
    {
        path: '',
        loadChildren: async () =>
            import(`../pages/documentation/what-is-cabord/what-is-cabord.module`).then(
                m => m.WhatIsCabordModule,
            ),
        data: {
            title: `What is Caboard?`,
        },
    },
    {
        path: 'lazy',
        loadChildren: () => import(`./modules/lazy/lazy.module`).then(m => m.LazyModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
            relativeLinkResolution: 'corrected',
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
