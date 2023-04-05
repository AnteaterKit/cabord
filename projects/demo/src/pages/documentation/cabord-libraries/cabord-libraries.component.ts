import {Component} from '@angular/core';
import {DemoPath} from '@demo/routes';

@Component({
    selector: 'app-cabord-libraries',
    templateUrl: './cabord-libraries.component.html',
    styleUrls: ['./cabord-libraries.component.less'],
})
export class CabordLibrariesComponent {
    readonly coreConceptsOverviewDocPage = `/${DemoPath.CoreConceptsOverview}`;
    readonly kitOverviewDocPage = `/${DemoPath.KitOverview}`;
    readonly angularDocPage = `/${DemoPath.Angular}`;
}
