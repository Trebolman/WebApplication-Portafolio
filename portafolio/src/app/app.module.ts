import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from '../c_home/home.component';
import { CrearComponent } from '../c_crear/crear.component';
import { EditarComponent } from '../c_editar/editar.component';
import { EliminarComponent} from '../c_eliminar/eliminar.component';
import { MostrarComponent } from '../c_mostrar/mostrar.component';
import { NotfoundComponent} from '../c_notfound/notfound.component';
import { DetalleComponent} from '../c_detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    MostrarComponent,
    NotfoundComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
