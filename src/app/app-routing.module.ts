import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// mis componentes o rutas
import { TesoreriaComponent } from './components/tesoreria/tesoreria.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component:InicioComponent,
  },
  {
    path:'tesoreria',
    component: TesoreriaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
