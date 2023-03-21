import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-install',
    templateUrl: './install.component.html',
    styleUrls: ['./install.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallComponent implements OnInit {
    ngOnInit(): void {}
}
