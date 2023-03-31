import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Provider} from '@angular/core';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {TUI_DOC_DEFAULT_TABS, TUI_DOC_LOGO, TUI_DOC_PAGES} from '@taiga-ui/addon-doc';
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
    {
        provide: TUI_DOC_DEFAULT_TABS,
        useValue: ['Description and examples', 'API'],
    },
    {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
            coreLibraryLoader: async () => import(`highlight.js/lib/core`),
            lineNumbersLoader: () => import('highlightjs-line-numbers.js' as string),
            languages: {
                typescript: async () => import(`highlight.js/lib/languages/typescript`),
                less: async () => import(`highlight.js/lib/languages/less`),
                xml: async () => import(`highlight.js/lib/languages/xml`),
            },
        },
    },
];
