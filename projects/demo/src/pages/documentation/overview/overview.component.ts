import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit {
    ngOnInit() {}
}
