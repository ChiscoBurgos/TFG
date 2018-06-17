import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfComponent } from './conf/conf.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'conf', component: ConfComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}