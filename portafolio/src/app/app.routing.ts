import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';

import { HomeComponent } from '../c_home/home.component';
import{ NotfoundComponent } from '../c_notfound/notfound.component';
import { CrearComponent } from '../c_crear/crear.component';
import { MostrarComponent } from '../c_mostrar/mostrar.component';
import { DetalleComponent } from '../c_detalle/detalle.component';
import { EditarComponent } from '../c_editar/editar.component';

const appRoutes:Routes=[
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'crear',
        component:CrearComponent

    },
    {
        path:'mostrar',
        component:MostrarComponent
    },
    {
        path:'detalle/:id',
        component:DetalleComponent
    },
    {
        path:'editar/:id',
        component:EditarComponent
    },
    {
        path:'**',
        component:NotfoundComponent
    }
]
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);