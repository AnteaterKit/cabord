import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCabordComponent} from './create-cabord.component';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    TuiTabsModule,
} from '@taiga-ui/kit';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiInputModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        CommonModule,
        FormsModule,
        TuiLinkModule,
        ReactiveFormsModule,
        TuiIslandModule,
        TuiAddonDocModule,
        TuiMarkerIconModule,
        TuiInputModule,
        TuiTabsModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild(tuiGenerateRoutes(CreateCabordComponent)),
    ],
    declarations: [CreateCabordComponent],
})
export class CreateCabordModule {}
