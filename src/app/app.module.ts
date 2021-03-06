import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { GuitarOrderFormComponent } from './guitar-order-form/guitar-order-form.component';
import { SpaceComponent } from './space/space.component';
import { ParentComponent } from './lifecycle/parent/parent.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { LoggingComponentComponent } from './lifecycle/logging-component/logging-component.component';
import { DoCheckTestComponent } from './doCheck/do-check-test/do-check-test.component';
import { DoCheckTestChildComponent } from './doCheck/do-check-test-child/do-check-test-child.component';
import { AboutComponent } from './about/about.component';
import { WrappLogWithParentLifecycleComponent } from './lifecycle/wrapp-log-with-parent-lifecycle/wrapp-log-with-parent-lifecycle.component';
import { JasmineTestComponent } from './jasmineTesting/jasmine-test/jasmine-test.component';
import { LoadChangeContentComponent } from './jasmineTesting/load-change-content/load-change-content.component';
import { JasmineTestWrapperComponent } from './jasmineTesting/jasmine-test-wrapper/jasmine-test-wrapper.component';
import { NoDependenciesComponentComponent } from './jasmineTesting/no-dependencies-component/no-dependencies-component.component';
import { Scss1Component } from './scssTraining/scss1/scss1.component';
import { ScssWrapperComponent } from './scssTraining/scss-wrapper/scss-wrapper.component';

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
    ChildComponentComponent,
    GuitarOrderFormComponent,
    SpaceComponent,
    ParentComponent,
    ChildComponent,
    LoggingComponentComponent,
    DoCheckTestComponent,
    DoCheckTestChildComponent,
    AboutComponent,
    WrappLogWithParentLifecycleComponent,
    JasmineTestComponent,
    LoadChangeContentComponent,
    JasmineTestWrapperComponent,
    NoDependenciesComponentComponent,
    Scss1Component,
    ScssWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
