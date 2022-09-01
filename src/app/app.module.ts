import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { TesoreriaComponent } from './components/tesoreria/tesoreria.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';

// angular material
import {MatTableModule} from '@angular/material/table';

import { TabsComponent } from './components/tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegacionComponent,
    TesoreriaComponent,
    TabsComponent,
    MovimientosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule,
    MatTableModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
