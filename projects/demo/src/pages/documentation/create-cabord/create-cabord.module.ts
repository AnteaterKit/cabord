import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCabordComponent} from './create-cabord.component';
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
        RouterModule.forChild(tuiGenerateRoutes(CreateCabordComponent)),
    ],
    declarations: [CreateCabordComponent],
})
export class CreateCabordModule {}
