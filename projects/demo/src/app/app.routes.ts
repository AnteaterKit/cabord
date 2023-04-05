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
        path: DemoPath.CabordLibraries,
        loadChildren: async () =>
            import(
                `../pages/documentation/cabord-libraries/cabord-libraries.module`
            ).then(m => m.CabordLibrariesModule),
        data: {
            title: `What is Caboard?`,
        },
    },
    {
        path: DemoPath.CreateCabord,
        loadChildren: async () =>
            import(`../pages/documentation/create-cabord/create-cabord.module`).then(
                m => m.CreateCabordModule,
            ),
        data: {
            title: `Create Caboard`,
        },
    },
    {
        path: DemoPath.CoreConceptsOverview,
        loadChildren: async () =>
            import(`../pages/documentation/overview/overview.module`).then(
                m => m.OverviewModule,
            ),
        data: {
            title: `Overview Caboard`,
        },
    },
    {
        path: DemoPath.CoreConceptsInstall,
        loadChildren: async () =>
            import(`../pages/documentation/install/install.module`).then(
                m => m.InstallModule,
            ),
        data: {
            title: `Install Caboard`,
        },
    },
    {
        path: DemoPath.CoreConceptsCustom,
        loadChildren: async () =>
            import(`../pages/documentation/custom/custom.module`).then(
                m => m.CustomModule,
            ),
        data: {
            title: `Install Caboard`,
        },
    },
    {
        path: DemoPath.KitOverview,
        loadChildren: async () =>
            import(`../pages/documentation/kit/kit.module`).then(m => m.KitModule),
        data: {
            title: `Overview Kit`,
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
