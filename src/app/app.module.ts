import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SomeButtonComponent } from './someButton/some-button/some-button.component';
import { SomeButtonMenuComponent } from './someButton/some-button-menu/some-button-menu.component';
import { MenuParentComponent } from './someButton/menu-parent/menu-parent.component';
import { Slider1Component } from './twoWayBinding/slider1/slider1.component';
import { Slider2Component } from './twoWayBinding/slider2/slider2.component';
import { MoveSliderDirective } from './twoWayBinding/move-slider.directive';
import { PercentPipe } from './percent.pipe';
import { ParentComponentComponent } from './twoWayBinding/parent-component/parent-component.component';
import { ChildComponentComponent } from './twoWayBinding/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDirectiveDirective,
    SomeButtonComponent,
    SomeButtonMenuComponent,
    MenuParentComponent,
    Slider1Component,
    Slider2Component,
    MoveSliderDirective,
    PercentPipe,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
