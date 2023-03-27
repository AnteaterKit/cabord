import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DemoPath} from '@demo/routes';

@Component({
    selector: 'app-install',
    templateUrl: './install.component.html',
    styleUrls: ['./install.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallComponent implements OnInit {
    readonly cabordCreateDocPage = `/${DemoPath.CreateCabord}`;
    ngOnInit(): void {}
}
