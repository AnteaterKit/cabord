import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstallComponent} from './install.component';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        RouterModule.forChild(tuiGenerateRoutes(InstallComponent)),
    ],
    declarations: [InstallComponent],
    exports: [InstallComponent],
})
export class InstallModule {}
