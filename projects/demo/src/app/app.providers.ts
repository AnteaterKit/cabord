import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Provider} from '@angular/core';

import {TUI_DOC_LOGO, TUI_DOC_PAGES} from '@taiga-ui/addon-doc';
import {DEMO_PAGES} from '../pages/pages';
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
    {
        provide: TUI_DOC_PAGES,
        useValue: DEMO_PAGES,
    },
];
