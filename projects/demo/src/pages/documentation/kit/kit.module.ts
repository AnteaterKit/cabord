import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {RouterModule} from '@angular/router';
import {KitComponent} from './kit.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        RouterModule.forChild(tuiGenerateRoutes(KitComponent)),
    ],
    declarations: [KitComponent],
})
export class KitModule {}
