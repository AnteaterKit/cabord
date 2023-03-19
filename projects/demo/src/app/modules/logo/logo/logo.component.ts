import {Component, OnInit} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
})
export class LogoComponent implements OnInit {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {}

    ngOnInit() {}
}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
