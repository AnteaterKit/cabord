import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DemoPath} from '@demo/routes';

@Component({
    selector: 'app-what-is-cabord',
    templateUrl: './what-is-cabord.component.html',
    styleUrls: ['./what-is-cabord.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIsCabordComponent {
    readonly cabordLibrariesDocPage = `/${DemoPath.CabordLibraries}`;
    readonly coreConceptsOverviewDocPage = `/${DemoPath.CoreConceptsOverview}`;
}
