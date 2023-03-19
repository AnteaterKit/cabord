import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CabordLibrariesComponent} from './cabord-libraries.component';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        RouterModule.forChild(tuiGenerateRoutes(CabordLibrariesComponent)),
    ],
    declarations: [CabordLibrariesComponent],
})
export class CabordLibrariesModule {}
