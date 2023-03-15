import {TuiRootModule} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {StaticModule} from './modules/static/static.module';
import {LogoModule} from './modules/logo/logo/logo.module';
import {APP_PROVIDERS} from './app.providers';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'demo',
        }),
        AppRoutingModule,
        StaticModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDocMainModule,
        LogoModule,
    ],
    declarations: [AppComponent],
    providers: APP_PROVIDERS,
})
export class AppBrowserModule {}
