import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {UniversalModule, UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {AppBrowserModule} from './app.browser.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [AppBrowserModule, ServerModule, UniversalModule],
    bootstrap: [AppComponent],
    providers: UNIVERSAL_PROVIDERS,
})
export class AppServerModule {}
