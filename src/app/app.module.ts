import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './cmp01-lazy-loading/app.routes';
import { Cmp01LazyLoadingComponent } from './cmp01-lazy-loading/cmp01-lazy-loading.component';
import { InicioComponent } from './cmp01-lazy-loading/inicio/inicio.component';
import { Cmp02TransclusionComponent } from './cmp02-transclusion/cmp02-transclusion.component';
import { AcordeonComponent } from './cmp02-transclusion/acordeon/acordeon.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01LazyLoadingComponent,
    InicioComponent,
    Cmp02TransclusionComponent,
    AcordeonComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
