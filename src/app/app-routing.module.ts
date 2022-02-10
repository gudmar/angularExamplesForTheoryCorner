import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponentComponent} from './twoWayBinding/parent-component/parent-component.component'
import {GuitarOrderFormComponent} from './guitar-order-form/guitar-order-form.component'
import {WrappLogWithParentLifecycleComponent} from './lifecycle/wrapp-log-with-parent-lifecycle/wrapp-log-with-parent-lifecycle.component'
import {AboutComponent} from './about/about.component'

const routes: Routes = [
  {path: 'two-way-binding', component: ParentComponentComponent, data:{myCustom:'some inputs'}},
  {path: 'form', component: GuitarOrderFormComponent},
  {path: 'lifecycle', component: WrappLogWithParentLifecycleComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
