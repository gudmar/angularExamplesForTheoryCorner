import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponentComponent} from './twoWayBinding/parent-component/parent-component.component'
import {GuitarOrderFormComponent} from './guitar-order-form/guitar-order-form.component'
import {WrappLogWithParentLifecycleComponent} from './lifecycle/wrapp-log-with-parent-lifecycle/wrapp-log-with-parent-lifecycle.component'
import {AboutComponent} from './about/about.component';
import {JasmineTestComponent} from './jasmineTesting/jasmine-test/jasmine-test.component'
import { JasmineTestWrapperComponent } from './jasmineTesting/jasmine-test-wrapper/jasmine-test-wrapper.component';
import { ScssWrapperComponent } from './scssTraining/scss-wrapper/scss-wrapper.component'

const routes: Routes = [
  {path: 'two-way-binding', component: ParentComponentComponent, data:{myCustom:'some inputs'}},
  {path: 'form', component: GuitarOrderFormComponent},
  {path: 'lifecycle', component: WrappLogWithParentLifecycleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'jasmine', component: JasmineTestWrapperComponent},
  {path: 'scss', component: ScssWrapperComponent},
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
