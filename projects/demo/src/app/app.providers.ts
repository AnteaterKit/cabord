import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Provider} from '@angular/core';

import {TUI_DOC_LOGO} from '@taiga-ui/addon-doc';
import {LOGO_CONTENT} from './modules/logo/logo/logo.component';

export const APP_PROVIDERS: Provider[] = [
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy,
    },
    {
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT,
    },
];
